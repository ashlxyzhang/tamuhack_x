import axios from "axios";
import { useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import Accounts from "./Accounts";
import Navbar from "./Navbar";
import Footer from "./Footer";

axios.defaults.baseURL = "https://us-central1-ashs-wrld.cloudfunctions.net/api";

interface PlaidAuthProps {
  publicToken: string;
}

const PlaidAuth = ({ publicToken }: PlaidAuthProps) => {
  const [accounts, setAccounts] = useState<any[] | null>([]);
  const [liab, setLiab] = useState<any[] | null>([]);
  useEffect(() => {
    async function fetch() {
      const accessToken = await axios.post("/exchange_public_token", {
        public_token: publicToken,
      });
      const auth = await axios.post("/auth", {
        access_token: accessToken.data.accessToken,
      });
      const liab = await axios.post("/liabilities", {
        access_token: accessToken.data.accessToken,
      });
      console.log("liabilities: ", liab.data);
      setLiab(liab.data);
      setAccounts(auth.data.accounts);
    }
    fetch();
  }, []);
  return <Accounts accounts={accounts} liab={liab} />;
};

const Connect = () => {
  const [linkToken, setLinkToken] = useState("");
  const [publicToken, setPublicToken] = useState("");

  useEffect(() => {
    async function fetch() {
      const response = await axios.post("/create_link_token");
      setLinkToken(response.data.link_token);
    }
    fetch();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token) => {
      setPublicToken(public_token);
      // send public_token to server
    },
  });

  return (
    <>
      <Navbar />
      {publicToken ? (
        <PlaidAuth publicToken={publicToken} />
      ) : (
        <div className="accounts">
          <div className="title">
            <span>A Summary of Your Accounts</span>
          </div>
          <div className="subtitle">
            Get an overview of your net worth, spending by category, and
            transactions.
          </div>
          <div className="flex justify-center items-center card">
            <div className="container text-center">
              <p>
                Welcome to your Fintelligent stats! <br />
                Scroll down for your assets, liabilities, and spending
                breakdown.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => open()}
                disabled={!ready}
              >
                Connect a bank account
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default { PlaidAuth, Connect };
