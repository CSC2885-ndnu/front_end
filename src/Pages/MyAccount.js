import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import UserDetails from "../Components/UserDetails.js";
import PostSubmissions from "../Components/PostSubmissions.js";
import ClassTakenOnNoteFinder from "../Components/ClassTakenOnNoteFinder.js";

import PersonalPicture from "../assets/PersonalPicture.jpg";

import "./MyAccount.css";

class MyAccount extends Component {
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
      <div>
        <Navbar />
        <div className="container">
          <div className="TitlePage">My Account</div>

          <div className="name">
            {this.state.UserData.firstName}
            {this.state.UserData.lastName}
          </div>
          <hr />
          <div className="userPicture ">
            <img src={PersonalPicture} width="200" height="150" r />
          </div>
          <hr />
          <ClassTakenOnNoteFinder />
          <UserDetails />
          <PostSubmissions />
        </div>

        <Footer />
      </div>
    );
  }
}

export default MyAccount;
