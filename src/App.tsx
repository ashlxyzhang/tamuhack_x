import "./App.css";
import About from "./components/About";
import Connect from "./components/Connect";
import Learn from "./components/Learn";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/accounts" element={<Connect.Connect />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <Connect.Connect /> */}
    </>
  );
}

export default App;
