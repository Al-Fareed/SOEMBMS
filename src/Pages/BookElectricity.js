import React from "react";
import "./BookElectricity.css";
import { useLocation,useHistory } from "react-router-dom";

const Book = () => {
  const location = useLocation();
  const sellerData = location.state || {};
  const history = useHistory();
  const goBack = () =>{
    history.goBack();
  }
  return (
    <div className="book-container">
      <h1>Name {sellerData.name}</h1>
      <h2>Phone {sellerData.phone}</h2>
      <h2>City {sellerData.address}</h2>
      <h2>Units {sellerData.units}</h2>
      <div className="btns">
        <button className="btn-back" onClick={goBack}>Go back</button>
        <button className="btn-apply">Apply</button>
      </div>
    </div>
  );
};

export default Book;
