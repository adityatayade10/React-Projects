import React from 'react'
import './Button.css'
import { MdMessage } from "react-icons/md"; // Assuming you have a CSS file for styles
const Button = (props) => {
  return (
    <button className={props.isOutline ? 'outline-button' : 'primary-button'}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default Button