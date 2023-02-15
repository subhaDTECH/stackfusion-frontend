import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">

          <div>
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/user-form">Users Form(Upload Data)</Link>
          </div>


          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar