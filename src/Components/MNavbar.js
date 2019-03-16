import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Row } from "reactstrap";
import ndnu from "../assets/ndnu.jpg";

class MNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md mb-4">
        <div className="container">
          <Link className="navbar-brand" to="#">
            Ndnu Notes
          </Link>

          <div className="Logo">
            <Row className="justify-content-md-center">
              <img src={ndnu} width="500" height="150" />
            </Row>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    );
  }
}

export default MNavbar;
