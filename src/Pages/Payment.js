import React from "react";
import "./Payment.css";
import { useLocation,useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Payment = () => {
  const location = useLocation();
  const units = location.state || {};
  const history = useHistory()
  const goBack = () =>{
    history.goBack();
  }
  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <hr />
      <div className="table">
        <div className="row">
          <p>Units Consumed &nbsp;&nbsp;</p>
          <p>{units}</p>
        </div>
        <div className="row">
          <p>SGST (8%)</p>
          <p>89</p>
        </div>
        <div className="row">
          <p>CGST (8%)</p>
          <p>89</p>
        </div>
        <div className="row">
          <p>Total</p>
          <p>{Math.round(units*8.2)}</p>
        </div>
      </div>
      <div className="btns">
        <button className="btn-back" onClick={goBack}>Go back</button>
        <button className="btn-pay">Pay</button>
      </div>
    </div>
  );
};

export default Payment;
