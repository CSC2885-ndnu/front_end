import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import Table1 from "../Components/Table1.js";
import EnrolledClasses from "../Components/EnrolledClasses.js";
import AdminDetailedPage from "../Components/AdminDetailedPage.js";

export default class AdminFullPage extends Component {

  state = {
    
    postData: []
  };

  componentDidMount() {
   

      fetch("https://api.myjson.com/bins/vi4rc")
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }
  render() {

    return (
      <div>
        <Navbar />
        <div className="container">
          
          <div className="headerInWelcomePage">Add or Delete Classes:</div>

        {this.state.postData.map(post => {
          return (
            <AdminDetailedPage
              key={post.id}
              
              admin_courseName={post.admin_courseName}
              admin_semester={post.admin_semester}
              />
              
          );
        })}
          <Footer />
        </div>
      </div>
    );
  }
}
