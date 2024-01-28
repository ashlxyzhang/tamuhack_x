import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src="logo.svg" alt="logo" className="logo" />
        {/* <div className="logo">Fintelligent</div> */}
        <div className="right">
          <ul className="group-links">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
          <button className="connect text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Connect a bank account
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
