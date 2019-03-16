import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import Table1 from "../Components/Table1.js";
import AccountData from "../Components/AccountData.js";

export default class LoggIn extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <AccountData />
          <Table1 />
          <Footer />
        </div>
      </div>
    );
  }
}
