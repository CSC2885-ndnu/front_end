import React, { Component } from "react";
import "./View_Post.css";

class View_Post extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="titleFont">{this.props.course}</h1>
        <br />
        <div className="postContainer">
          <h1 className="titleFont">{this.props.title}</h1>
          <p>{this.props.note}</p>
          <p className="text-muted">
            Attactment
            <br />
            123.pdf
          </p>
          <div className="row">
            <div className="col-sm-4 text-secondary">
              Posted: {this.props.post_date}
            </div>
            <div className="col-sm-4 text-secondary">
              Author: {this.props.user}
            </div>
            <div className="col-sm-4 text-secondary">
              Class Date: {this.props.class_date}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default View_Post;
