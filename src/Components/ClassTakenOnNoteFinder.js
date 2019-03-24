import React, { Component } from "react";
import { Button, CardBody } from "reactstrap";
import UserData from "../Data/User_Profile_Page.json";
import "./ClassTakenOnNoteFinder.css";

const Div = {
  backgroundColor: "#e4ebef"
};
const DivTable = {
  backgroundColor: "#FFFFFF"
};

class ClassTakenOnNoteFinder extends Component {
  render() {
    return (
      <div>
        <div className="Classcard float-right">
          <CardBody>
            <hr />
            <div className="Title">Classes Taken on NoteFinder</div>
            <hr />

            <table striped class="Dtable table-bordered" style={DivTable}>
              <th style={{ color: "white", background: "#00274c" }} />
              <th style={{ color: "white", background: "#00274c" }} />
              <th style={{ color: "white", background: "#00274c" }} />

              <tr>
                <th>Course</th>
                <th>Title</th>
                <th>Status</th>
              </tr>

              {UserData.map(item => {
                return (
                  <tbody>
                    <tr key={item.id}>
                      <td>{item.enrolled_course_section}</td>
                      <td>{item.enrolled_course_name}</td>
                      <td>{item.Staus}</td>
                    </tr>

                    <tr key={item.id}>
                      <td>{item.enrolled_course_section}</td>
                      <td>{item.enrolled_course_name}</td>
                      <td>{item.Staus}</td>
                    </tr>
                    <tr key={item.id}>
                      <td>{item.enrolled_course_section}</td>
                      <td>{item.enrolled_course_name}</td>
                      <td>{item.Staus}</td>
                    </tr>
                    <tr key={item.id}>
                      <td>{item.enrolled_course_section}</td>
                      <td>{item.enrolled_course_name}</td>
                      <td>{item.Staus}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <Button className="button2" color="primary float-right " size="sm">
              Show more classes
            </Button>
          </CardBody>
        </div>
      </div>
    );
  }
}

export default ClassTakenOnNoteFinder;
