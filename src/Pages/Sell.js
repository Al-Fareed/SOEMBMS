import React, { useState } from "react";
import "./Sell.css";
import ToolTip from "../FormElements/ToolTip";
// import input from "../FormElements/input";
import "../FormElements/Input.css";
import axios from "axios";
const Sell = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [units, setUnits] = useState("");

  const formData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    units: units,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/sell/post", formData)
      .then(
        setName(""),
        setEmail(""),
        setPhone(""),
        setAddress(""),
        setUnits("")
      )
      .catch((error) => {
        console.error("Error posting sell data:", error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-header">
          <h3>Sell Electricity</h3>
          <ToolTip message="Do you have unconsumed electricity? you can sell them in this page" />
        </div>

        <div className="input-container">
          <label className="placeholder-text" htmlFor=""></label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="placeholder-text" htmlFor=""></label>
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="placeholder-text" htmlFor=""></label>
          <input
            type="number"
            placeholder="Phone Number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="placeholder-text" htmlFor=""></label>
          <input
            type="textarea"
            placeholder="Address"
            row="3"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="placeholder-text" htmlFor=""></label>
          <input
            type="number"
            placeholder="Number of Units"
            id="units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button className="btn-submit" type="submit">
            SUBMIT
          </button>
          <button className="btn-reset" type="reset">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sell;
