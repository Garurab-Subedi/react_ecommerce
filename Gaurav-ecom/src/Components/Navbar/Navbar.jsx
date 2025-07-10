import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu ] = useState("home");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" height="50px"/>
            <p>Shopfiy</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/">Home</Link>{menu === "home" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:"none", color:"#626262" }} to="/mens">Mens</Link>{menu === "Mens" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/womens">Womens</Link>{menu === "Womens" ? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none", color:"#626262"}} to="/kids">Kids</Link>{menu === "Kids" ? <hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"><button>Login</button></Link>
                <Link t0="/cart"><img src={cart_icon} alt="" height="30px" /></Link>
                <div className="nav-cart-count">0</div>
            </div>  
    </div>
  )
}

export default Navbar