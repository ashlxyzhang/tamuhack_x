import axios from "axios";
import { useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";

axios.defaults.baseURL = "http://localhost:8000";

interface PlaidAuthProps {
  publicToken: string;
}

const PlaidAuth = ({ publicToken }: PlaidAuthProps) => {
  useEffect(() => {
    async function fetch() {
      let accessToken = await axios.post("/exchange_public_token", {
        public_token: publicToken,
      });
      console.log("access token: ", accessToken.data);
    }
    fetch();
  }, []);
  return <span>{publicToken}</span>;
};

const Home = () => {
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
    onSuccess: (public_token, metadata) => {
      setPublicToken(public_token);
      console.log("success", public_token, metadata);
      // send public_token to server
    },
  });

  return publicToken ? (
    <PlaidAuth publicToken={publicToken} />
  ) : (
    <div className="flex h-lvh justify-center items-center">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => open()}
        disabled={!ready}
      >
        Connect a bank account
      </button>
    </div>
  );
};

export default Home;
