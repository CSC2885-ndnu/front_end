import React, { Component } from "react";
import { CardBody, Button } from "reactstrap";

import "./UserDetails.css";

class UserDetails extends Component {
  state = {
    UserData: []
  };

  componentDidMount() {
    fetch("http://localhost:8080/seniorproject/userById/1")
      .then(data => data.json())
      .then(data => this.setState({ UserData: data }));
  }

  render() {
    return (
      <div className="Usercard">
        <CardBody>
          <hr />
          <div className="Title">User Details</div>
          <hr />
          <div className="idnum float-left">ID Number :</div>
          <div className="Uname">{this.state.UserData.user_id}</div>

          <div className="idnum float-left">First Name :</div>
          <div className="Uname">{this.state.UserData.firstName}</div>

          <div className="idnum float-left">Last Name :</div>
          <div className="Uname">{this.state.UserData.lastName}</div>

          <div className="idnum float-left">Student ID :</div>
          <div className="Uname">{this.state.UserData.studentID}</div>

          <div className="idnum float-left">Email :</div>
          <div className="Uname">{this.state.UserData.email}</div>

          <div className="idnum float-left">Password :</div>
          <div className="Uname">{this.state.UserData.password}</div>

          <Button href="/Post" size="lg">
            Post Notes
          </Button>
        </CardBody>
      </div>
    );
  }
}

export default UserDetails;
