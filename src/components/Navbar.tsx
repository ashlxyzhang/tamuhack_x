import { Link } from "react-router-dom";
import "../styling/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src="logo.svg" alt="logo" className="logo" />
        {/* <div className="logo">Fintelligent</div> */}
        <div className="right">
          <ul className="group-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/accounts"}>Accounts</Link>
            <Link to={"/learn"}>Learn</Link>
            <Link to={"/about"}>About</Link>
          </ul>
          <button className="connect text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Link to={"/accounts"}>Connect a bank account</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
