import React from "react";
import './Buy.css';
const Buy = () => {
  const sellers = [
    {
      name: "Mark",
      Phone: "7348842781",
      Address: "Washington",
      units: 230,
    },
    {
      name: "Zuckerberg",
      Phone: "8217789463",
      Address: "Mala",
      units: 580,
    },
    {
      name: "Zuckerberg",
      Phone: "8217789463",
      Address: "Mala",
      units: 580,
    },
    {
      name: "Zuckerberg",
      Phone: "8217789463",
      Address: "Mala",
      units: 580,
    },
    {
      name: "Zuckerberg",
      Phone: "8217789463",
      Address: "Mala",
      units: 580,
    },
    {
      name: "Zuckerberg",
      Phone: "8217789463",
      Address: "Mala",
      units: 580,
    },
    
  ];
  return (
    <div>
      <div className="heading">
        <p>Name</p>
        <p>Address</p>
        <p>Units</p>
        <p>Action</p>
      </div>
      {sellers.map((seller) => (
        <div className="user-container">
          <h2>{seller.name}</h2>
          <p>{seller.Address}</p>
          <p>{seller.units} units</p>
          <div className="btn-container">
            <button>View</button>
            <button>Request</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buy;
