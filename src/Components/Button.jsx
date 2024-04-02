import React from 'react'

function Button(props) {
    console.log(props.iswhite);
  return (
    <div>
        <button className={props.iswhite ? "white-btn" : "black-btn" } id='form-btn'>{props.text}</button>
    </div>
  )
}

export default Button