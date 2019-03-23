import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import UserDetails from "../Components/UserDetails.js";
import ClassTakenOnNoteFinder from "../Components/ClassTakenOnNoteFinder.js";
import NotePosted from "../Components/NotePosted.js";
import PersonalPicture from "../assets/PersonalPicture.jpg";
import UserData from "../Data/User_Profile_Page.json";
import "./MyAccount.css";
class MyAccount extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="TitlePage">My Account</div>
          {UserData.map(userDetail => {
            return <div className="name ">{userDetail.user_name}</div>;
          })}
          <hr />
          <div className="userPicture ">
            <img src={PersonalPicture} width="200" height="150" r />
          </div>
          <hr />
          <ClassTakenOnNoteFinder />
          <UserDetails />
          <NotePosted />
        </div>

        <Footer />
      </div>
    );
  }
}

export default MyAccount;
