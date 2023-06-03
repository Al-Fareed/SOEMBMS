import React, { useRef } from "react";

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
        <h2>About SOEBMS</h2>
        <div>
          The Smart Online Electricity Billing Management System (SOEBMS) <br />{" "}
          is a cutting-edge solution to automate electricity billing, provide
          insight to track power consumption of each consumers.
        </div>
        </div>
      <div className="objectives">
      <img src={require("../images/y.jpg")} alt="Why" />
        <ul>
          <li onClick={scrollToAutomatedMeterReading}>Automated meter reading and accurate billing</li>
          <li onClick={scrollToInsight}>Insight on Electricity consumption</li>
          <li onClick={scrollToTrading}>Electricity trading</li>
          <li onClick={scrollToEnhancedSecurity}>Enhanced security</li>
        </ul>
      </div>
      <div ref={automatedMeterReadingRef} className="automated-meter-reading">
      To overcome traditional approach of reading and billing of consumption of electricity, which takes labour work. This system will integrate smart metering technology to enable real-time monitoring and generation of bill.
      </div>
      <div ref={tradingRef} className="trading">
      A consumer who has more than sufficient electricity can sell electricity as well as other user in this application can buy the listed users willing to sell their un consumed electricity.
      </div>
      <div ref={InsightRef}>
          hello
      </div>
      <div ref={enhancedSecurityRef} className="enhanced-security">
      Main key feature of this application is enhanced security. The system employs blockchain technology to enhance security, ensuring secure transactions, protecting data integrity, and providing reliable user authentication.
      </div>
    </React.Fragment>
  );
};

export default Ads;
