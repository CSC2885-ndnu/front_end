import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer float-right ">
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="2">
                <Link className="nav-link" to="/ContactUs">
                  Contact Us
                </Link>
              </Col>
              <Col xs lg="2">
                <Link className="nav-link" to="/Privacy">
                  Privacy & Terms
                </Link>
              </Col>
              <Col xs lg="2">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default Footer;
