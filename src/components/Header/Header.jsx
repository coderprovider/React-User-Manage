import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="appTitle">
        <div className="flex text-center">React User Manager</div>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
