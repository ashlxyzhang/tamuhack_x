import "../styles/main.css";
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="left">
          <h1 className="heading">Learn where your money is going</h1>
          <div className="sub-heading">
            Take a closer look at your finances and improve your spending habits
          </div>
          <button className="connect text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Connect a bank account
          </button>
        </div>
        <div className="right">
          <div className="plots">
            <img className="carrying" src="carrying.png" alt="" />
            <div className="attribution">
              Stock image by iconicbestiary on Freepik
            </div>
          </div>
          {/* <div className="placeholder"></div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
