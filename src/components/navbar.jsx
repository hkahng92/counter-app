import React, { Component } from "react";

//Currently have single reference to the props object, but when working with more complex markups, we might have multiple references to the props (don't wanna be repeating props.props. several times etc)
//You do object destructuring to destructure the props arugment
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
