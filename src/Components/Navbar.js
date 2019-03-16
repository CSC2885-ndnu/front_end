import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Row, Col } from "reactstrap";
import ndnu from "../assets/ndnu.jpg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md mb-4">
        <div className="container">
          <Link className="navbar-brand" to="#">
            Ndnu Notes
          </Link>

          <div className="Logo">
            <Row className="justify-content-md-center">
              <Col xs="4">
                <img src={ndnu} width="500" height="150" />
              </Col>
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
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="LoggIn">
                  My Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Logout">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
