import React, { Component } from "react";
import { CardBody, Button, CardHeader } from "reactstrap";
import AdminData from "../Data/Admin.json";
import "./UserDetails.css";

class AdminDetails extends Component {
  render() {
    return (
      <div className="Usercard">
      <CardHeader style={{ color: "white", background: "#00274c" }}>Administrator Info</CardHeader>
        <CardBody>
          <hr />
          
          <div className="email float-left">Email :</div>
          {AdminData.map(AdminDetails => {
            return <div className="Demail">{AdminDetails.email}</div>;
          })}
          <hr />
          <div className="Security float-left">Security Level :</div>
          {AdminData.map(AdminDetails => {
            return <div className="Dsecurity">{AdminDetails.Security_Level}</div>;
          })}

        </CardBody>
      </div>
    );
  }
}

export default AdminDetails;
