import React, { Component } from "react";
import Welcome_page from "../Components/Welcome_page.js";

class PostSubmissions extends Component {
  state = {
    postData: []
  };

  componentDidMount() {
    fetch("http://localhost:8080/seniorproject/getUserCourses/1")
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }

  render() {
    return (
      <div>
        <div className="headerInWelcomePage">Your recent posts:</div>
        {this.state.postData.map(post => {
          return (
            <Welcome_page
              key={post.id}
              submission_title={post.courseDescription}
              submission_course_name={post.courseName}
              submission_notes={post.courseSyllabus}
              submission_time_class_meets={post.meetingDay}
              submission_date={post.year}
              submission_link={post.link}
              submission_flag={post.submission_flag}
            />
          );
        })}
      </div>
    );
  }
}
export default PostSubmissions;
