// Input.js
import React from "react";
import "./Input.css";

const Input = (props) => {
  const { type, id, placeholder, row } = props;

  const element =
    type === "text" ? (
      <input id={id} type={type} />
    ) : type === "number" ? (
      <input id={id} type={type} maxLength={10} minLength={10}/>
    ) : type === "email" ? (
      <input id={id} type={type} />
    ) : (
      <textarea id={id} rows={row} />
    );

  return (
    <div className="input-container">
      <label className="placeholder-text" htmlFor={id}>
        {placeholder}
      </label>
      {element}
    </div>
  );
};

export default Input;
