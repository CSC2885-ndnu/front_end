import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./View_Post.css";



class AdmiDetailedPage extends Component {
  
  
  render() {
    return (
      
      <div className="container"> 
      
        
        <br />
        <div className="postContainer">
          <Link to="#"><h1 className="titleFont">{this.props.admin_courseName}</h1></Link>
          <div className="col-sm-4 text-secondary">
              Semester: {this.props.admin_semester}
            </div>
        </div>
      </div>
     
    );
  }
}

export default AdmiDetailedPage;
