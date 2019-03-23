import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import Welcome_page from "../Components/Welcome_page.js";


class WelcomePage extends Component {
  state = {
    postData: []
  };

  componentDidMount() {
    fetch("https://api.myjson.com/bins/ive5e")
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }
  render() {
    return (
      <div>
        
        <Navbar />
        <div className="headerInWelcomePage">Here are your recent submissions:</div>
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
        <Footer />
      </div>
    );
  }
}

export default WelcomePage;
