import { useEffect, useState } from "react";
import "../styling/Accounts.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

interface AccountsProps {
  accounts: any[] | null;
  liab: any[] | null;
}

const Accounts = ({ accounts }: AccountsProps) => {
  const [cash, setCash] = useState(0);
  const [credit, setCredit] = useState(0);
  const [loan, setLoan] = useState(0);
  const [inv, setInv] = useState(0);
  const [totalBal, setTotalBal] = useState(0);
  const [numAccounts, setNumAccounts] = useState(0);

  const donut = {
    labels: ["Cash", "Investments", "Credit", "Loans"],
    datasets: [
      {
        label: "$",
        data: [cash, inv, credit, loan],
        backgroundColor: [
          "rgba(75, 255, 192, 0.2)",
          "rgba(40, 192, 192, 0.2)",
          "rgba(255, 99, 0, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const credit_apr = {
    labels: ["Balance Transfer APR", "Cash APR", "Purchase APR", "Special APR"],
    datasets: [
      {
        label: "%",
        data: [15.24, 27.95, 12.5, 0],
        backgroundColor: [
          "rgba(53, 162, 235, 0.5)",
          "rgba(160, 162, 235, 0.5)",
          "rgba(50, 160, 160, 0.5)",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const getSubBalances = () => {
      if (accounts) {
        let cashTotal = 0;
        let creditTotal = 0;
        let loanTotal = 0;
        let invTotal = 0;
        let total = 0;
        accounts.forEach((acc) => {
          if (acc.type === "depository") {
            cashTotal += acc.balances.current;
          } else if (acc.type === "credit") {
            creditTotal += acc.balances.current;
          } else if (acc.type === "loan") {
            loanTotal += acc.balances.current;
          } else if (acc.type === "investment") {
            invTotal += acc.balances.current;
          } else console.log(acc.type);
        });
        setCash(parseFloat(cashTotal.toFixed(2)));
        setCredit(parseFloat(creditTotal.toFixed(2)));
        setLoan(parseFloat(loanTotal.toFixed(2)));
        setInv(parseFloat(invTotal.toFixed(2)));
        total = cashTotal + invTotal - creditTotal - loanTotal;
        setTotalBal(parseFloat(total.toFixed(2)));
        setNumAccounts(accounts.length);
      }
    };
    getSubBalances();
  }, [accounts]);

  return (
    <>
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
              Scroll down for your assets, liabilities, and spending breakdown.
            </p>
          </div>
          <div>
            <p className="caption">Total Net Worth</p>
            <p className="value">${totalBal.toLocaleString()}</p>
          </div>
          <div>
            <p className="caption">Number of Accounts Connected</p>
            <p className="value">
              {numAccounts != 1
                ? `${numAccounts} Accounts`
                : `${numAccounts} Account`}
            </p>
          </div>
        </div>

        <div className="other_title">
          <p>Net Worth Breakdown</p>
        </div>
        <div className="other_subtitle">
          Your total across {numAccounts} bank accounts:{" "}
        </div>
        <div className="money">${totalBal.toLocaleString()}</div>
        <div className="flex">
          <div className="box card assets">
            <p className="small_money">${(cash + inv).toLocaleString()}</p>
            <p className="card_name">Assets</p>
            <div className="flex money_card">
              <p>Cash</p>
              <p>${cash.toLocaleString()}</p>
            </div>
            <div className="flex money_card">
              <p>Investment</p>
              <p>${inv.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center donut">
            <Doughnut data={donut} />
          </div>
          <div className="box card liabilities">
            <p className="small_money">${(credit + loan).toLocaleString()}</p>
            <p className="card_name">Liabilities</p>
            <div className="flex money_card">
              <p>Credit Card</p>
              <p>${credit.toLocaleString()}</p>
            </div>
            <div className="flex money_card">
              <p>Loans</p>
              <p>${loan.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <p className="other_title">Credit Cards</p>
        <p className="other_subtitle">APRs</p>
        <div className="flex credit_bar justify-center items-center">
          <div
            className="flex justify-center items-center"
            style={{ height: 300, width: 500 }}
          >
            <Bar options={options} data={credit_apr} />
          </div>
          <div className="credit_text card">
            <p>
              <strong>Balance Transfer APR:</strong> 15.24%
            </p>
            <p>
              <strong>Cash APR:</strong> 27.95%
            </p>
            <p>
              <strong>Purchase APR:</strong> 12.5%
            </p>
            <p>
              <strong>Special APR:</strong> 0%
            </p>
          </div>
        </div>

        <div className="pb-20">
          <p className="other_title">Accounts Breakdown</p>
          <p className="other_subtitle">Cash, Investments, Credit, and Loans</p>
          <div className="flex flex-col">
            {accounts?.map((acc, index) => (
              <div className="card account flex items-center" key={index}>
                <p className="account_name">{acc.official_name || acc.name}</p>
                <div className="account_bal">
                  <p>
                    Available Balance: $
                    {(acc.balances.available || 0).toLocaleString()}
                  </p>
                  <p>
                    Current Balance: $
                    {parseFloat(
                      acc.balances.current.toFixed(2)
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
