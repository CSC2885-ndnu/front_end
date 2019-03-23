import React, { Component } from "react";
import "./EnrolledClasses.css";

class EnrolledClasses extends Component {

  render() {
    return (
    	<div>
    		<h3 className="titleStyle">{this.props.classTitle}</h3>
    		<div className="row">
            	<div className="col-sm-6 text-secondary">
              		Instructor: {this.props.instructor}
            	</div>
            	<div className="col-sm-6 text-secondary">
              		Meeting day: {this.props.meetingDay}
            	</div>
          </div>
    	</div>
    );
  }
}

export default EnrolledClasses;