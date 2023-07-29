import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Buy.css";
import axios from "axios";

const Buy = () => {
  const history = useHistory();
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/buy/")
      .then((response) => setSellers(response.data))
      .catch((error) =>
        console.log("could not fetch data in msg from front-end", error)
      );
  }, []); // Provide an empty dependency array

  const redirectToBookPage = (sellerData) => {
    history.push({
      pathname: "/book",
      state: sellerData,
    });
  };

  return (
    <div className="buy-page">
      <div className="heading">
        <p>Name</p>
        <p>City</p>
        <p>Units</p>
        <p>Action</p>
      </div>
      {sellers.map((seller) => (
        <div key={seller._id} className="user-container">
          <h3>{seller.name}</h3>
          <p>{seller.address}</p>
          <p>{seller.units} units</p>
          <div className="btn-container">
            <button
              className="btn-1"
              onClick={() => redirectToBookPage(seller)}
            >
              View
            </button>
            <button className="btn-2">Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buy;
