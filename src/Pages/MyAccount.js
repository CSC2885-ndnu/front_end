import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import UserDetails from "../Components/UserDetails.js";
import ClassTakenOnNoteFinder from "../Components/ClassTakenOnNoteFinder.js";
import Welcome_page from "../Components/Welcome_page.js";
import Button from 'react-bootstrap/Button'
import PersonalPicture from "../assets/PersonalPicture.jpg";
import UserData from "../Data/User_Profile_Page.json";
import "./MyAccount.css";



class MyAccount extends Component {

  state = {
    postData: []
  };
  
  componentDidMount() {
    
      fetch("https://api.myjson.com/bins/wg4aa")
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }

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
          <Button href="/Post" size="lg">Post Notes</Button>

          <div className="headerInWelcomePage">Your recent posts:</div>
          {this.state.postData.map(post => {
          return (
            <Welcome_page
              key={post.id}
              submission_title={post.submission_title}
              submission_course_name={post.submission_course_name}
              submission_notes={post.submission_notes}
              submission_time_class_meets={post.submission_time_class_meets}
              submission_date={post.submission_date}
              submission_link={post.submission_link}
              submission_flag={post.submission_flag}
            />
          );
        })}
          
        </div>

        <Footer />
      </div>
    );
  }
}

export default MyAccount;
