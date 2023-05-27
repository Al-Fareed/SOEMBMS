import React from "react";
import './Buy.css';
const Buy = () => {
  const sellers = [
    {
      name: "Mark",
      Phone: "7348842781",
      City: "Washington",
      units: 230,
    },
    {
      name: "Jack",
      Phone: "8217789463",
      City: "Mala",
      units: 50,
    },
    {
      name: "Mukesha",
      Phone: "8217789463",
      City: "Udupi",
      units: 320,
    },
    {
      name: "Birla",
      Phone: "8217789463",
      City: "Manipal",
      units: 315,
    },
    {
      name: "TATA",
      Phone: "8217789463",
      City: "Bangalore",
      units: 250,
    },
    {
      name: "Andrew Tate",
      Phone: "8217789463",
      City: "Karla",
      units: 600,
    },
    
  ];
  return (
    <div className="buy-page">
      <div className="heading">
        <p>Name</p>
        <p>City</p>
        <p>Units</p>
        <p>Action</p>
      </div>
      {sellers.map((seller) => (
        <div className="user-container">
          <h3>{seller.name}</h3>
          <p>{seller.City}</p>
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
