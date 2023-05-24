import React from 'react'
import './ToolTip.css'
const ToolTip = (props) => {
  return (
    <div className='tooltip'>
      <i class="fa-regular fa-lightbulb"></i>
      <span class="tooltiptext">{props.message}</span>
    </div>
  )
}

export default ToolTip