//import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import sampleData from "./Sample.js";
import React, { Component, Typography } from 'react'

// Import React Table
import ReactTable from "react-table";
//import "react-table/react-table.css";
import BootstrapTable from 'react-bootstrap-table-next';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const Div = {
  
  backgroundColor: "#e4ebef"
  
}
const DivTable = {
  
  backgroundColor: "#FFFFFF"
  
}


class Table1 extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (

      
      
      <div style={Div}>
       
        <table class="table table-bordered" style={DivTable}>
       
        <th style={{ color: 'white', background: '#00274c' }}></th>
        <th style={{ color: 'white', background: '#00274c' }}> Recent Note Submissions</th>
        <th style={{ color: 'white', background: '#00274c' }}></th>
        
        
        <tr>
          <th>Class Name</th>
          <th>Class Number</th>
          <th>Date of Submission</th>
        </tr>   

          {sampleData.map((item, i) => {
            return (
              
              <tr key={i}>
                <td>{item.className}</td>
                <td>{item.classNumber}</td>
                <td>{item.date}</td>

                </tr>  
            );
          })}
          
        </table>
      </div>
     
    );
  }
}
export default Table1;

/*render(<App />, document.getElementById("root"));*/
