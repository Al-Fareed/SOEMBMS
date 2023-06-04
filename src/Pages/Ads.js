import React, { useRef } from "react";
import './Ads.css';
const Ads = () => {
  const automatedMeterReadingRef = useRef(null);
  const tradingRef = useRef(null);
  const enhancedSecurityRef = useRef(null);
  const InsightRef = useRef(null);

  const scrollToAutomatedMeterReading = () => {
    automatedMeterReadingRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTrading = () => {
    tradingRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToEnhancedSecurity = () => {
    enhancedSecurityRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollToInsight = () => {
    InsightRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <React.Fragment>
      <div className="about">
        <img 
          src={
            "https://konicaminoltaau.imgix.net/getmedia/db355129-0bb6-45df-a181-6b4db47885d3/Automation-blog.jpg?width=670&auto=format"
          }
          alt="mujhe kuch dikhai nhi de rha maa"
        />
        <div className="about-description" >
        <h2>About SOEBMS</h2>
          The Smart Online Electricity Billing Management System (SOEBMS) <br />{" "}
          is a cutting-edge solution to automate electricity billing, provide
          insight to track power consumption of each consumers.
        </div>
      </div>
       <div className="objectives">
        <img className="img" src={require("../images/y.jpg")} alt="Why" />
        <div className="obj-desc">
        <h1>Why SOEBMS</h1>
        <ul>
          <li onClick={scrollToAutomatedMeterReading}>
            Automated meter reading and accurate billing
          </li>
          <li onClick={scrollToInsight}>Insight on Electricity consumption</li>
          <li onClick={scrollToTrading}>Electricity trading</li>
          <li onClick={scrollToEnhancedSecurity}>Enhanced security</li>
        </ul>
        </div>
      </div>
      {/*<div ref={automatedMeterReadingRef} className="automated-meter-reading">
        <h1>Automated meter reading</h1>
        <img className="img" src={require("../images/Automate.jpg")} alt="" />
        To overcome traditional approach of reading and billing of consumption
        of electricity, which takes labour work. This system will integrate
        smart metering technology to enable real-time monitoring and generation
        of bill.
      </div>
      <div ref={tradingRef} className="trading">
        <h1>Electricity Trading</h1>
        <img className="img right" src={require("../images/Buy-sell.avif")} alt="" />A consumer who
        has more than sufficient electricity can sell electricity as well as
        other user in this application can buy the listed users willing to sell
        their un consumed electricity.
      </div>
      <div ref={InsightRef}>
      <img className="img" src={require("../images/meter-reading.jpg")} alt="" />
        <h1>Insight on electricity consumption</h1>
        hello
      </div>
      <div ref={enhancedSecurityRef} className="enhanced-security">
        <h1>Enhanced Security</h1>
        <img className="img right" src={require("../images/Security.png")} alt="" />
        Main key feature of this application is enhanced security. The system
        employs blockchain technology to enhance security, ensuring secure
        transactions, protecting data integrity, and providing reliable user
        authentication.
      </div> */}
    </React.Fragment>
  );
};

export default Ads;
