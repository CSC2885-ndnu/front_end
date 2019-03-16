import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import "./Home.css";

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Contact Us</h2>

          <Footer />
        </div>
      </div>
    );
  }
}
