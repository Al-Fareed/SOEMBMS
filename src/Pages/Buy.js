import React, { useState, useEffect } from "react";
import "./Buy.css";
import axios from "axios";
const Buy = () => {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/buy/")
      .then((response) => setSellers(response.data))
      .catch((error) =>
        console.log("could not fetch data in msg from front-end", error)
      );
  });

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
            <button className="btn-1">View</button>
            <button className="btn-2">Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buy;
