import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'


const Navbar = () => {
 

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-nav">
            <li><Link to="/homePage">🏠 Home</Link></li>
            <li><Link to="/jobs">💼 Jobs</Link></li>
            <li><Link to="/addJob">➕ Add</Link></li>
            <li><Link to="/Statistics">📊 Statistics</Link></li>
          </ul>
         </div>
        
      </nav>

    </>
  )
}

export default Navbar