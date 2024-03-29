import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="title">
          <h3>Charan'S mall</h3>
        </div>
      </div>
      <div className="center">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..."></input>
      </div>
      <div className="right">
        <div className="signin">SignIn / SignUp</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
};

export default Header;
