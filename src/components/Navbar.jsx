import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <Logo />
        </Link>
        
        <div className="navbar-nav me-auto">
          <Link className="nav-link" to="/">בית</Link>
          <Link className="nav-link" to="/storage-calculator">מחשבון אחסנה</Link>
          <Link className="nav-link" to="/tools">כלים</Link>
          <Link className="nav-link" to="/resources">משאבים</Link>
          <Link className="nav-link" to="/about">אודות</Link>
          <Link className="nav-link" to="/contact">צור קשר</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
