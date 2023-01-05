import React from "react";
import "./Nav.css";
import account from "../Assets/account-home.png";
import newLight from "../Assets/new-light.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="Navigations">
      <h1>Budget App</h1>
      <button className="NewTransaction">
        <img src={newLight} alt="new_icon" srcset="" /> New Transaction
      </button>
      <button className="Account-Home">
        <img src={account} alt="home_icon" srcset="" />
      </button>
    </div>
  );
}
