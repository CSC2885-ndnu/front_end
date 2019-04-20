import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import Table1 from "../Components/Table1.js";
import EnrolledClasses from "../Components/EnrolledClasses.js";
import Welcome_page from "../Components/Welcome_page.js";

export default class LoggIn extends Component {
  state = {
    classData: [],
    postData: []
  };

  componentDidMount() {
    fetch("http://localhost:8080/seniorproject/getUserCourses/1")
      .then(data => data.json())
      .then(data => this.setState({ classData: data }));

    fetch("https://api.myjson.com/bins/wg4aa")
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="boxContainer">
            {this.state.classData.map(classes => {
              return (
                <EnrolledClasses
                  key={classes.id}
                  instructor={classes.professor}
                  classTitle={classes.courseName}
                  meetingDay={classes.meetingDay}
                />
              );
            })}
          </div>
          <div className="headerInWelcomePage">Your recent submissions:</div>
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
      </div>
    );
  }
}
