import React from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  //We can not use life cycle hooks in stateless funtional components because here we have single funtion which return output of component.
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
        <span className="badge bagde-bill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
