import React from 'react'
import './Input.css';
const Input = (props) => {

const element = props.type !== 'textarea' ?
<input
    id={props.id}
    type={props.type}
    // placeholder={props.placeholder}
    onChange={(e)=>e.target.value}
    
/> :
<textarea
    id={props.id}
    type={props.type}
    // placeholder={props.placeholder}
    onChange={(e)=>e.target.value}
    rows={props.row}
/>
  return (
    <div className='input-container'>
      <label className='placeholder-text' htmlFor={props.id}>{props.placeholder}</label>
        {element}
    </div>
  )
}

export default Input