import express, { json } from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SANDBOX_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 8000;

app.post("/hello", (req, res) => {
  // res.json({message: "hello world"});
  res.json({message: "hello " + req.body.name});
});

app.post("/create_link_token", async function (request, response) {
  // Get the client_user_id by searching for the current user
  const plaidRequest = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: 'user',
    },
    client_name: 'FINtellect',
    products: ['auth'],
    language: 'en',
    redirect_uri: 'http://localhost:5173/',
    country_codes: ['US'],
  };
  try {
    const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
    response.json(createTokenResponse.data);
  } catch (error) {
    // handle error
    response.status(500).send("failure");
  }
});

app.post('/exchange_public_token', async function (
  request,
  response,
  next,
) {
  const publicToken = request.body.public_token;
  console.log(publicToken);
  try {
    console.log("inside");
    const plaidResponse = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });
    console.log(plaidResponse.data);

    // These values should be saved to a persistent database and
    // associated with the currently signed-in user
    const accessToken = plaidResponse.data.access_token;
    const itemID = plaidResponse.data.item_id;

    response.json({ accessToken });
  } catch (error) {
    // handle error
    response.status(500).send("failure");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});