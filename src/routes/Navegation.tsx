import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';


export const Navegation = () => {
  return (
    <>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink 
              className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
              to="/" 
              >Home</NavLink>
            </li>
            <li>
              <NavLink 
              className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
              to="/" 
              >about</NavLink>
            </li>
            <li>
              <NavLink 
              className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
              to="/user" 
              >Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/> 
          <Route path="/about" element={<h1>About</h1>}/> 
          <Route path="/user" element={<h1>Users</h1>}/> 
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}
