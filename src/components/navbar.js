import React from 'react'
import "./../App.css"
import logo from "./../images/logoM.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>        
            <h4>MUTIFY</h4>
            
        </div>
    )
}
