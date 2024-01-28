import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styling/About.css";

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="about_page">
          <div className="m-10">
            <div className="flex about_cont">
              <div className="flex flex-col">
                <p className="about_sub m-8">Your Financial Advisor Partner</p>
                <p className="subtitle mx-10">Our Mission</p>
                <p className="about_p mx-10">
                  Fintelligent is on a mission to empower individuals and
                  businesses with financial intelligence. We believe that by
                  providing access to accurate, timely, and actionable financial
                  information, we can help our clients make informed decisions
                  and achieve their financial goals.
                </p>
              </div>

              <img className="about_img" src="/stock.jpeg" alt="" />
            </div>
          </div>

          <div className="about_products">
            <p className="about_sub text-center my-10">Our Products</p>
            <div className="flex text-center product_box">
              <div className="card product">
                <p className="subtitle">Accounts</p>
                <div className="flex justify-center mb-5">
                  <img style={{ width: 100 }} src="/bookkeeping.png" alt="" />
                </div>
                <p className="font-light">
                  Take control of your personal finances with Fintelligent. Our
                  user-friendly platform allows you to track your spending, set
                  savings goals, and plan for a secure financial future. Get an
                  overview of your net worth, spending by category, and
                  transactions.
                </p>
              </div>
              <div className="card product">
                <p className="subtitle">Learn</p>
                <div className="flex justify-center mb-5">
                  <img style={{ width: 100 }} src="/album.png" alt="" />
                </div>
                <p className="font-light">
                  We believe that continuous learning is key to financial
                  success. Our interactive flashcards are designed to help you
                  deepen your understanding of crucial financial concepts.
                  Whether you're a beginner or an experienced finance
                  enthusiast, there's always something new to discover.
                </p>
              </div>
            </div>
          </div>

          <div className="p-10">
            <p className="text-center about_sub my-10">Our Values</p>
            <div className="flex justify-between items-center elements">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="flex justify-center items-center">
                  <img src="/scale.png" alt="scale" />
                </div>
                <p className="m-8">
                  <strong>Integrity</strong> <br /> <br />
                  We uphold the highest standards of integrity in everything we
                  do. Trust is the foundation of our relationships with clients
                  and partners.
                </p>
              </div>
              <div className="flex flex-col justify-center text-center">
                <div className="flex justify-center items-center">
                  <img src="/promotion.png" alt="promotion" />
                </div>
                <p className="m-8">
                  <strong>Innovation</strong> <br /> <br />
                  Fintelligent is committed to continuous innovation. We embrace
                  new technologies and methodologies to stay at the forefront of
                  financial intelligence.
                </p>
              </div>
              <div className="flex flex-col justify-center text-center">
                <div className="flex justify-center items-center">
                  <img src="/currency.png" alt="currency" />
                </div>
                <p className="m-8">
                  <strong>Customer-Centricity</strong> <br /> <br />
                  Our clients are at the center of everything we do. We strive
                  to exceed their expectations by delivering exceptional value
                  and service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
