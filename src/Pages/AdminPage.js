import React, { Component } from "react";

import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import AdminDetails from "../Components/AdminDetails.js";
import Welcome_page from "../Components/Welcome_page.js";

import avatar from "../assets/avatar.png";
import UserData from "../Data/User_Profile_Page.json";
import "./AdminPage.css";
import AdminManageClasses from "../Components/AdminManageClasses.js";
import AdminData from "../Data/Admin.json";




class AdminPage extends Component {

  render() {
    return (
      <div>
        <Navbar />
        
        
        <div className="container">
        
          <div className="TitlePageAdmin">Welcome Administrator!</div>
          {AdminData.map(AdminDetails => {
            return <div className="name ">{AdminDetails.user_name}</div>;
          })}
          <hr />
          <div className="userPicture ">
            <img src={avatar} width="200" height="150" r />

 

          </div>
          
          <AdminManageClasses />
          <AdminDetails />
          
      
        <Footer />
      </div>
      </div>
    );
  }
}

export default AdminPage;
