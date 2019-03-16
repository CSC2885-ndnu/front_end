import React, { Component } from "react";
import MNavbar from "../Components/MNavbar.js";
import Footer from "../Components/Footer.js";
import Table1 from "../Components/Table1.js";
import CLogout from "../Components/CLogout.js";
import "./Home.css";

export default class Logout extends Component {
  render() {
    return (
      <div>
        <MNavbar />
        <div className="container">
          <h2>Welcome to NoteFinder at NDNU!</h2>
          <CLogout />
          <Table1 />
          <Footer />
        </div>
      </div>
    );
  }
}
