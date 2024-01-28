import "../styles/learn.css";

const Learn = () => {
  return (
    <>
      <p>
        Hover over the{" "}
        <span className="tooltip" data-definition="This is the definition">
          word
        </span>{" "}
        to see the definition.
      </p>
      <p>
        <span className="tooltip" data-definition="This is the definition">
          income
        </span>{" "}
      </p>{" "}
      <span
        className="tooltip"
        data-definition="Tax on the assessed value of owned real estate"
      >
        <strong>property tax</strong>
      </span>{" "}
      <span
        className="tooltip"
        data-definition="onsumption-based tax imposed on goods and services at the point of purchase"
      >
        <strong>sales tax</strong>
      </span>{" "}
      <span
        className="tooltip"
        data-definition="- Work credits are earned based on the individual's annual earnings. The amount of earnings needed to earn one credit can change annually. The minimum number of credits required to receive benefits is 40"
      >
        <strong>Social Security credits</strong>
      </span>{" "}
      <span
        className="tooltip"
        data-definition="Survivor benefits are available to the spouses, children, and dependent parents of deceased workers who had earned enough social security credits. These benefits provide financial support to eligible family members after the death of a worker"
      >
        <strong>survivor benefits</strong>
      </span>{" "}
      <div className="card-grid">
        <div className="card" id="investing">
          <a href="#budgeting">
            <h2>
              Money management is the process of effectively managing and
              controlling one's financial resources. It involves making informed
              decisions regarding earning, spending, saving, investing, and
              budgeting in order to achieve financial goals and maintain
              financial health. Successful money management requires discipline,
              financial literacy, and a proactive approach to financial
              planning.
            </h2>
          </a>
        </div>
        <div className="card" id="budgeting">
          <a>
            <h2>
              Budgeting is the process of creating a plan that allocates
              financial resources over a specific period, typically a month or a
              year. The goal of a budget is to manage{" "}
              <span
                className="tooltip"
                data-definition="Sources of income include salaries, wages, bonuses, investment returns, and any other sources of money"
              >
                <strong>income</strong>
              </span>{" "}
              and{" "}
              <span
                className="tooltip"
                data-definition="Categorize and list all regular and discretionary expenses. Common categories include housing, utilities, groceries, transportation, insurance, debt payments, and savings"
              >
                <strong>expenses</strong>
              </span>{" "}
              effectively, ensuring you understand where your money is going and
              allowing you to make informed decisions about your financial
              priorities. A well-designed budget will help you control spending,
              save for future goals, and achieve financial stability. Regularly
              monitor your spending against your budget to identify
              discrepancies and reassess your financial decisions
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              Investing is the act of allocating money or resources with the
              expectation of a profit in return. Investors make investments in
              assets such as stocks, bonds, property, mutual funds, and other
              financial instruments in order to increase their wealth or achieve
              other goals.
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              Saving is the act of setting aside a portion of your income or
              assets for future use. Savings are commonly accumulated in savings
              accounts, certificates of deposits, or other low-risk and
              accessible financial instruments. Goals for saving vary from
              meeting future expenses, working towards specific financial goals,
              or establishing an{" "}
              <span
                className="tooltip"
                data-definition="A fund designed to cover unexpected expenses such as: medical bills, car repairs, and other unforeseen circumstances"
              >
                <strong>emergency fund</strong>
              </span>{" "}
              . Many savings instruments provide interest, enabling the money to
              grow over time, but this growth tends to be slower than investing.
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              Cryptocurrency is a type of digital currency that uses{" "}
              <span
                className="tooltip"
                data-definition="Cryptocurrencies use cryptographic techniques to secure transactions and control the creation of new currency. Public and private keys are used facilitate secure transactions between parties."
              >
                <strong>cryptography</strong>
              </span>{" "}
              for security and operates on{" "}
              <span
                className="tooltip"
                data-definition="No single authority has control over the entire network. Instead, transactions are verified by a distributed network of participants (nodes)."
              >
                <strong>decentralized</strong>
              </span>{" "}
              networks based on{" "}
              <span
                className="tooltip"
                data-definition="Blockchain is a distributed ledger that records all transactions across a network of computers. Each block in the chain contains a list of transactions, and once a block is completed, it is linked to the previous one, forming a chain."
              >
                <strong>blockchain</strong>
              </span>{" "}
              technology. Currency is traded between{" "}
              <span
                className="tooltip"
                data-definition="While transactions are publicly recorded on the blockchain, the identities of the parties remain private."
              >
                <strong>anonymous parties</strong>
              </span>{" "}
              on the blockchain. Many cryptocurrencies have a maximum number of
              units that can ever by created, which can impact the value of the
              cryptocurrency. Some use a process called mining to validate
              transactions and secure the network through solving complex
              mathematical problems. In return, miners get rewarded with new
              cryptocurrency coins.
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              A 401(k) is an employer-sponsored retirement savings plan in the
              US. It allows{" "}
              <span
                className="tooltip"
                data-definition="Participants can elect to contribute a portion of their pre-tax salary to their 401(k) plan. These contributions are deducted from their paycheck before income taxes are applied, helping lower their taxable income for the year"
              >
                <strong>employees to contribute</strong>
              </span>{" "}
              a portion of their pre-tax earnings to a tax-advantaged investment
              account. 401(k) plans provide individuals the opportunity to
              benefit from tax advantages and{" "}
              <span
                className="tooltip"
                data-definition="Many employers offer to match a portion of employee contributions as an additional benefit. The employer match is often subject to certain conditions, such as a maximum percentage of the employee's salary or a vesting
        schedule"
              >
                <strong>employer matching contributions</strong>
              </span>
              {""}. Contributions and investment earnings are tax-deferred,
              meaning that participants do not pay taxes on their contributions
              or investment gains until they withdraw the money in retirement.
            </h2>
          </a>
        </div>
        <div className="card" id="investing">
          <a href="#budgeting">
            <h2>
              Social security is a social insurance program managed by the
              Social Security Administration (SSA) that provides financial
              support to eligible individuals and their families. The program is
              designed to provide income security for retired and disabled
              workers as well as{" "}
              <span
                className="tooltip"
                data-definition="Survivor benefits are available to the spouses, children, and dependent parents of deceased workers who had earned enough social security credits. These benefits provide financial support to eligible family members after the death of a worker"
              >
                <strong>survivor benefits</strong>
              </span>{" "}
              for dependents of deceased workers. To qualify for benefits,
              individuals must earn{" "}
              <span
                className="tooltip"
                data-definition="- Work credits are earned based on the individual's annual earnings. The amount of earnings needed to earn one credit can change annually. The minimum number of credits required to receive benefits is 40"
              >
                <strong>Social Security credits</strong>
              </span>{" "}
              by working jobs that are covered by the program. The number of
              credits depends on the benefit and individuals can earn a maximum
              4 credits per year. Individuals can receive their full Social
              Security retirement benefits based on an age determined by their
              birth year. This ranges between 65 and 67.
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              Stock markets are platforms where buyers and sellers trade shares
              of publicly listed companies. These markets provide a venue for
              companies to raise capital by issuing stocks and for investors to
              buy and sell them. Stock markets facilitate the flow of capital
              between investors and companies. Investors participate in stock
              markets with the goal of earning returns on their investments
              through capital appreciation (increased{" "}
              <span
                className="tooltip"
                data-definition="The price of a stock is determined by supply and demand dynamics. If more investors want a stock (demand) than sell it (supply), the price tends to rise and vice versa. Stock prices are also influenced by a variety of factors including company
        performance, economic conditions, and industry trends."
              >
                <strong>stock prices</strong>
              </span>
              {""}
              ). However, investing involves risks as{" "}
              <span
                className="tooltip"
                data-definition="Stock markets can experience price fluctuations based on a variety of factors including economic indicators, geopolitical events, corporate earnings reports, and changes in interest rates"
              >
                <strong>prices are volatile</strong>
              </span>
              {""}. In order to participate in stock markets, investors should
              conduct research, diversify portfolios, and understand their risk
              tolerance.
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              Government bonds are debt securities issued by the government to
              raise funds for various purposes, including financing public
              projects, covering budget deficits, and more. When investors
              purchase government bonds, they are essentially lending money to
              the government in exchange for periodic interest payments and
              return of the principal at{" "}
              <span
                className="tooltip"
                data-definition="Government bonds have a fixed-term maturity, indicating the period until the bond matures and the principal is repaid to the bond-holder. Maturities can range from a few months to several decades depending on bond type"
              >
                <strong>maturity</strong>
              </span>
              {""}. Bonds are typically included in portfolios for capital
              preservation, income generation, and a safeguard against market
              volatility. While they are relatively{" "}
              <span
                className="tooltip"
                data-definition="Government bonds are considered low risk because they are backed by the government's ability to tax and print money. As a result, they are generally safer than corporate bonds"
              >
                <strong>safe</strong>
              </span>
              {""}, all investments carry a level of risk.
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              A Roth IRA (Individual Retirement Account) is an IRA that offers
              unique tax advantages for retirement savings. Unlike traditional
              IRAs, contributions to a Roth IRA are made with after-tax dollars.
              The main benefit of a Roth IRA is that{" "}
              <span
                className="tooltip"
                data-definition="Withdrawals of contributions and earnings on those contributions are tax-free. To be qualified, withdrawals must occur after the age of 59.5 and the account must be open for at least 5 years."
              >
                <strong>qualified withdrawals</strong>
              </span>{" "}
              are tax-free in retirement.
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              A mutual fund allows you to pool money with other investors to
              "mutually" buy investments (stocks, bonds, etc). The money is used
              by a professional fund manager to invest in a{" "}
              <span
                className="tooltip"
                data-definition="By diversifying investments, the risk is spread out and the impact of any single poor investment is reduced."
              >
                <strong>diverse portfolio</strong>
              </span>{" "}
              of investments, and investors are able to buy shares in the mutual
              fund. Mutual funds are convenient and highly accessible, enabling
              a wide range of investors to participate in financial markets and
              gradually increase their wealth in a hands-off approach.
            </h2>
          </a>
        </div>
        <div className="card" id="taxes">
          <a href="taxes.html">
            <h2>
              Taxes refer to compulsory financial contributions imposed by the
              government on individuals, businesses, or other entities,
              typically based on income, profits, or transactions. Taxes play a
              crucial role in funding government programs and services,
              including infrastructure, education, healthcare, and public
              safety. Understanding the basics of taxation, such as different
              types of taxes (e.g.,{" "}
              <span
                className="tooltip"
                data-definition="A government levy on individuals' earnings"
              >
                <strong>income tax</strong>
              </span>
              {""},{" "}
              <span
                className="tooltip"
                data-definition="Tax on the assessed value of owned real estate"
              >
                <strong>property tax</strong>
              </span>
              {""},{" "}
              <span
                className="tooltip"
                data-definition="A government levy on individuals' earnings"
              >
                <strong>income tax</strong>
              </span>{" "}
              ), deductions, credits, and filing procedures, is essential for
              individuals and businesses to effectively manage their finances
              and comply with legal obligations.
            </h2>
          </a>
        </div>
      </div>
    </>
  );
};

export default Learn;
