import React from 'react'
import './ToolTip.css'
const ToolTip = (props) => {
  return (
    <div className='tooltip'>
      <i className="fa-regular fa-lightbulb"></i>
      <span className="tooltiptext">{props.message}</span>
    </div>
  )
}

export default ToolTip