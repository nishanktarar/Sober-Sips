import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='navbar'>
        <section className='navbar-center'>
        <div className='logo'>
          <Link to="/">
            <h2>Cocktails</h2>
          </Link>
        </div>
        <ul className='nav-links'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        </section>
    </nav>
  )
}

export default Navbar