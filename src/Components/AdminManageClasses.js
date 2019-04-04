
import React, { Component } from "react";
import { Button, CardBody, Card, CardHeader } from "reactstrap";
import UserData from "../Data/User_Profile_Page.json";
import UserDetails from "../Components/UserDetails.js";
import AdminFullPage from "../Pages/AdminFullPage.js";
import LoggIn from "../Pages/LoggIn.js";
import "./AdminManageClasses.css";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Div = {
  backgroundColor: "#e4ebef"
};
const DivTable = {
  backgroundColor: "#FFFFFF"
};

class AdminManageClasses extends Component {

  constructor() {

    super();
    this.state = {
        postData: [],
    }; 

}



componentDidMount() {
fetch("https://api.myjson.com/bins/11qgdk")
    .then(data => data.json())
    .then(data => this.setState({postData: data}))
}







  render() {
    return (
      <div>
        <div className="ClassCardAdmin float-right">
        <CardHeader style={{ color: "white", background: "#00274c" }}>Manage Classes</CardHeader>
          <CardBody style={{'height': '300px', 'overflow':'scroll', 'display': 'block'}}>
            <hr />
           
            <hr />
           
            
           
            <table striped class="DtableA table-bordered" style={DivTable}>
              <th style={{ color: "white", background: "#00274c" }} />
              <th style={{ color: "white", background: "#00274c" }} />
              <th style={{ color: "white", background: "#00274c" }} />

              <tr>
                
                <th>Course Name</th>
                <th>Semester</th>
              </tr>
              {this.state.postData.map(
          post => {
            return (
              
            <tr key={post.id}>
                
                <Link to="/AdminFullPage"><th>{post.courseName}</th></Link>
                <Route exact path="/AdminFullPage" Component={AdminFullPage} />
                <th>{post.semester}</th>

                </tr>  
            );
          })}
            </table>
            
            
        
          
      <Link to="/AdminFullPage" ><Button style={{ color: "white", background: "#00274c" }}>Expand Page</Button></Link>
      <Route exact path="/AdminFullPage" Component={AdminFullPage} />
 
       

          </CardBody>
        </div>
      </div>
    );
  }
}

export default AdminManageClasses;
