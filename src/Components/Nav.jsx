import React from 'react'
import logo from "/imgs/Frame.png";


function nav() {
  return (
    <div>
<div className="container navbar">

  <div className="logo">
    <img src={logo} alt="" srcset="" />
  </div>
  <div className="left-menu">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default nav