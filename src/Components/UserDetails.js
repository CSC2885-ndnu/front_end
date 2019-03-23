import React, { Component } from "react";
import { CardBody, Button } from "reactstrap";
import UserData from "../Data/User_Profile_Page.json";

import "./UserDetails.css";

class UserDetails extends Component {
  render() {
    return (
      <div className="Usercard">
        <CardBody>
          <hr />
          <div className="Title">User Details</div>
          <hr />
          <div className="idnum float-left">ID Number :</div>
          {UserData.map(userDetail => {
            return <div className="idnumber">{userDetail.id}</div>;
          })}

          <div className="Username float-left">Student Name :</div>
          {UserData.map(userDetail => {
            return <div className="Uname">{userDetail.user_name}</div>;
          })}
          <div className="email float-left">Email :</div>
          {UserData.map(userDetail => {
            return <div className="Demail">{userDetail.email}</div>;
          })}
          <div className="password float-left">Password :</div>
          {UserData.map(userDetail => {
            return <div className="Dpassword">{userDetail.Password}</div>;
          })}
          <div className="Security float-left">Security Level :</div>
          {UserData.map(userDetail => {
            return <div className="Dsecurity">{userDetail.Security_Level}</div>;
          })}

          <Button color="primary float-right " size="sm">
            Edit
          </Button>
        </CardBody>
      </div>
    );
  }
}

export default UserDetails;
