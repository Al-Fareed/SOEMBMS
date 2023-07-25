// Input.js
import React from 'react';
import './Input.css';

const Input = (props) => {
  const { type, id, placeholder, row, changeHandle } = props;

  const element = type !== 'textarea' ? (
    <input
      id={id}
      type={type}
      onChange={changeHandle}
    />
  ) : (
    <textarea
      id={id}
      rows={row}
      onChange={changeHandle}
    />
  );

  return (
    <div className='input-container'>
      <label className='placeholder-text' htmlFor={id}>{placeholder}</label>
      {element}
    </div>
  );
};

export default Input;
