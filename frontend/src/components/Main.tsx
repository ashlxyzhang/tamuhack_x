import { Link } from "react-router-dom";
import "../styling/main.css";
import Footer from "./Footer";
import Graphs from "./Graphs";
import Navbar from "./Navbar";
import Quotes from "./Quotes";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="left">
          <div className="flex heading gap-10" style={{ fontSize: 85 }}>
            <img src="/favicon.svg" alt="" />
            <h1>Fintelligent</h1>
          </div>
          <h1 className="heading">Learn where your money is going</h1>
          <div className="sub-heading">
            Take a closer look at your finances and improve your spending habits
          </div>
          <button className="connect text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Link to={"/accounts"}>Connect a bank account</Link>
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
      <Quotes />
      <Graphs />
      <Footer />
    </>
  );
};

export default Main;
