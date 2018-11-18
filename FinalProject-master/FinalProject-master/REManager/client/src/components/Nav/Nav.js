// import React from 'react';


// const Nav = (props) => {
//     return (
//         <ul className='nav nav-tabs'>
//             <li className='nav-item'>
//                 <a
//                 onClick={() => props.handlePageChange('Login')}
//                 className={props.currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
//                 Login
//                 </a>
//             </li>
//             <li className='nav-item'>
//                 <a
//                 onClick={() => props.handlePageChange('Home')}
//                 className={props.currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
//                 Home
//                 </a>
//             </li>
//             <li className='nav-item'>
//                 <a
//                 onClick={() => props.handlePageChange('Update')}
//                 className={props.currentPage === 'Update' ? 'nav-link active' : 'nav-link'}>
//                 Update
//                 </a>
//             </li>
//         </ul>
//     )
// }
// export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      RE Portfolio
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/home" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/properties"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/properties" className="nav-link">
          Properties
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/owners"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/owners" className="nav-link">
            Owners
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/tenants"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/tenants" className="nav-link">
            Tenants
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/reports"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/reports" className="nav-link">
          Reports
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
