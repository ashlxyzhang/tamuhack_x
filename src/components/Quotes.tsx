import "../styles/quotes.css";
const Quotes = () => {
  return (
    <>
      <div className="info">
        <div className="subtitle">Hear from our satisfied customers</div>
        <div className="container">
          <div className="box">
            <img src="person1.jpg" alt="white box" className="white-box" />
            <div className="subtext">
              This is the best website I've ever used!
            </div>
          </div>
          <div className="box">
            <img src="person2.jpg" alt="white box" className="white-box" />
            <div className="subtext">
              "I used to spend all my money on worthless consumer goods. After
              learning on this site, I've become detached from my material
              possesions."
            </div>
          </div>
          <div className="box">
            <img src="person3.jpg" alt="white box" className="white-box" />
            <div className="subtext">"It's pretty good."</div>
          </div>
          <div className="box">
            <img src="person4.jpg" alt="white box" className="white-box" />
            <div className="subtext">
              "Let's just say that if there are 1,000,000 Fintelligent fans, I'm
              one of them. If there is one Fintelligent fan, I am that one. If
              there are no Fintelligent fans, I am dead."
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
