import React, { useState } from "react";
import "./Sell.css";
import ToolTip from "../FormElements/ToolTip";
// import input from "../FormElements/input";
import "../FormElements/Input.css";
import axios from "axios";

const NewMeter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      landmark: landmark,
    };
    axios
      .post("http://localhost:8000/new", data)
      .then(
        setName(""),
        setEmail(""),
        setPhone(""),
        setAddress(""),
        setLandmark("")
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-header">
          <h3>Apply for New Meter</h3>
          <ToolTip message="Apply for new Smart-Meter to avail all the features of this application" />
        </div>
        <div className="input-container">
          <label className="placeholder-text" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label className="placeholder-text" htmlFor="email">
            E-mail
          </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div className="input-container">
          <label className="placeholder-text" htmlFor="phone">
            Phone Number
          </label>
          <input
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
          </div>
           <div className="input-container">
          <label className="placeholder-text" htmlFor="address">
          Address
          </label>
          <input
          type="textarea"
          row="3"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
          </div> 

          <div className="input-container">
          <label className="placeholder-text" htmlFor="landmark">
            Landmark
          </label>
          <input
          type="text"
          id="landmark"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />
          </div>
        
        
        
        <div className="buttons">
          <button className="btn-submit" type="submit">
            SUBMIT
          </button>
          <button className="btn-reset" type="submit">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMeter;
