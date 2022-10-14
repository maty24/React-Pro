import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { FormikBasicPage } from '../form/pages/FormikBasicPage';
import { FormikComponent } from '../form/pages/FormikComponent';
import { FormikYupPage } from '../form/pages/FormikYupPage';
import { RegisterPage } from '../form/pages/RegisterPage';
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
              to="/register" 
              >Register Page</NavLink>
            </li>
            <li>
              <NavLink 
              className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
              to="/formik-basic" 
              >Formik Basic</NavLink>
            </li>
            <li>
              <NavLink 
              className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
              to="/formik-yup" 
              >Formik Yup</NavLink>
            </li>
            <li>
              <NavLink 
              className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
              to="/formikcomponent" 
              >Formik component</NavLink>
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
          <Route path="/register" element={<RegisterPage/>}/> 
          <Route path="/formik-basic" element={<FormikBasicPage/>}/> 
          <Route path="/formik-yup" element={<FormikYupPage/>}/> 
          <Route path="/formikcomponent" element={<FormikComponent/>}/> 
          <Route path="/user" element={<h1>Users</h1>}/> 
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}
