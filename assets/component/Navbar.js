import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/app.css';

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className={"navbar-brand"} to={"/"}> Symfony React Project </NavLink>
          <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <NavLink className={"nav-link"} to={"/posts"}> Posts </NavLink>
                  </li>

                  <li className="nav-item">
                      <NavLink className={"nav-link"} to={"/users"}> Users </NavLink>
                  </li>
              </ul>
          </div>
      </nav>
  )
}
