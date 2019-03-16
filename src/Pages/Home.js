import React, { Component } from "react";
import MNavbar from "../Components/MNavbar.js";
import Footer from "../Components/Footer.js";
import Table1 from "../Components/Table1.js";
import Login from "../Components/Login.js";
import personNotes from "../assets/personNotes.jpg";
import "../Components/Footer.css";
import "./Home.css";

const DivComponent = {
  backgroundColor: "#e4ebef"
};

const Welcome = {
  padding: "10px 20px",
  backgroundColor: "#00274c",
  textAlign: "center",
  color: "white",
  fontSize: "50px",
  boxSizing: "border-box"
};

export default class Home extends Component {
  render() {
    return (
      <div style={DivComponent}>
        <MNavbar />
        <div className="container">
          <h2 style={Welcome}>Welcome to NoteFinder at NDNU!</h2>
          <div className="PLogo  float-left">
            <img src={personNotes} width="500" height="325" r />
          </div>
          <Login />
          <Table1 />
        </div>
        <Footer />
      </div>
    );
  }
}
