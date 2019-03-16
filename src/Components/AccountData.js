import React, { Component } from "react";
import { Button, CardBody, CardTitle } from "reactstrap";
import "./AccountData.css";

class AccountData extends Component {
  render() {
    return (
      <div>
        <h1>Welcome, Michael</h1>
        <div className="card">
          <CardBody>
            <CardTitle>Courses you are Enrolled In:</CardTitle>
            <hr />
          </CardBody>

          <img
            width="90%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <Button color="primary" size="lg">
              {" "}
              Post it
            </Button>
          </CardBody>
        </div>
      </div>
    );
  }
}

export default AccountData;
