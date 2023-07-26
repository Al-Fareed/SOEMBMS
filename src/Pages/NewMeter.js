import React, { useState } from "react";
import "./Sell.css";
import ToolTip from "../FormElements/ToolTip";
// import input from "../FormElements/input";
import '../FormElements/Input.css'
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
      .post("http://localhost:8000/new",data)
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
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="textarea"
          placeholder="Address"
          row="3"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Land Mark"
          id="landmark"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />
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
