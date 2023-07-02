import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Blog App</h1>
        <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/create"} style={{
              backgroundColor:'rgb(79, 70, 229)',
              color:'white',
              borderRadius:'8px',
            }} >New Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar