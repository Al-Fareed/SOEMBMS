import React, { useState } from "react";
import "./Sell.css";
import ToolTip from "../FormElements/ToolTip";
import Input from "../FormElements/Input";
import axios from "axios";
const Sell = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    units: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { id, value } = event.target;
    // console.log(`Updating ${id}`, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
    .post("http://localhost:8000/sell/post", formData)
    .then((response) => {
      // Handle the response from the backend if needed
      console.log("Response from backend:", response.data);
      alert('Your data has been successfully stored');
      setFormData(initialFormData);
      })
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
        <Input
          type="text"
          placeholder="Name"
          id="name"
          value={formData.name}
          changeHandle={handleChange}
        />
        <Input
          type="email"
          placeholder="E-mail"
          id="email"
          value={formData.email}
          changeHandle={handleChange}
        />
        <Input
          type="number"
          placeholder="Phone Number"
          id="phone"
          value={formData.phone}
          changeHandle={handleChange}
        />
        <Input
          type="textarea"
          placeholder="Address"
          row="3"
          id="address"
          value={formData.address}
          changeHandle={handleChange}
        />
        <Input
          type="number"
          placeholder="Number of Units"
          id="units"
          value={formData.units}
          changeHandle={handleChange}
        />

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
