import React from 'react';
import Table from 'react-bootstrap/Table';

export default class PostTable extends React.Component{

    constructor() {
        super();
        this.state = {
            className: 'History101',
            classDescription: 'Focuses on the 21st century and the conflicts',
            postData: [],
        }
    }

    componentDidMount() {
        fetch("https://api.myjson.com/bins/jfuqc")
            .then(data => data.json())
            .then(data => this.setState({postData: data}))
      }
     
    render() {
        return(
            <div>
                <h1>{this.state.className}</h1>
                <p>{this.state.classDescription}</p>

                <Table striped bordered hover>
                    <tr>
                      <th>Post ID</th>
                      <th>Post Title</th>
                      <th>Notes</th>
                    </tr>
                    {this.state.postData.map((post, idx1) => {
              return (
                <tr key={post.id}>
                    <td>{post.post_ID}</td>
                  <td>{post.post_Title}</td>
                  <td>{post.post_note}</td>
        
                </tr>
              );
            })}
                </Table>
            </div>
        );

    }
}