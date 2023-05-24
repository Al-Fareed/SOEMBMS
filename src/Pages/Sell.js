import React from "react";
import "./Sell.css";
import Input from "../FormElements/Input";
const Sell = () => {
  return (
    <div class="container">
      <form>
        <h3>Sell Electricity</h3>
        <Input type="text" placeholder="Name" id="name"  />
        <Input type="email" placeholder="E-mail" id="email"  />
        <Input type="number" placeholder="Phone Number" id="phone"  />
        <Input type="textarea" placeholder="Address" row='3' id="address"  />
        <Input type="number" placeholder="Number of Units" row='3' id="address"  />
        <button className="btn-submit" type="submit">SUMBIT</button>
        <button className="btn-reset" type="submit">RESET</button>

      </form>
    </div>
  );
};

export default Sell;
