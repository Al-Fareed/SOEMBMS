import React from 'react';
import "./Sell.css";
import ToolTip from '../FormElements/ToolTip';
import Input from '../FormElements/Input';
const NewMeter = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
      };
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-header">
          <h3>Apply for New Meter</h3>
          <ToolTip message="Apply for new Smart-Meter to avail all the features of this application" />
        </div>
        <Input type="text" placeholder="Name" id="name" />
        <Input type="email" placeholder="E-mail" id="email" />
        <Input type="number" placeholder="Phone Number" id="phone" />
        <Input type="textarea" placeholder="Address" row="3" id="address" />
        <Input type="text" placeholder="Land Mark" id="landmark" />
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
  )
}

export default NewMeter;