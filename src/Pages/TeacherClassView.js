import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import AddButton from '../Components/AddButton'

export default class TeacherClassView extends React.Component {
    
    constructor() {
    super();
    this.state = {
        className: 'History101',
        classDescription: 'Focuses on the 21st century and the conflicts',
        postData: [],
    }
}
    componentDidMount() {
        fetch("https://api.myjson.com/bins/o8rvw")
            .then(data => data.json())
            .then(data => this.setState({postData: data}))
      }
      render() {
              return(
                <div>
                    <h1>{this.state.className}</h1>
                    <p>{this.state.classDescription}</p>
                    <AddButton />

                <Table striped bordered hover>
                    <tr>
                      <th>NDNU ID</th>
                      <th>Student Name</th>
                      <th>Remove</th>
                    </tr>
                    {this.state.postData.map((post, idx1) => {
              return (
                <tr key={post.id}>
                  <td>{post.ndnuId}</td>
                  <td>{post.studentName}</td>
                  <td>
                    <Button
                      onClick={() =>
                        this.setState({
                          postData: this.state.postData.filter(
                            (item, idx2) => idx1 !== idx2
                          )
                        })
                      }
                    >
                    delete
                    </Button>
                  </td>
                </tr>
              );
            })}
                </Table>
                </div>
              );
          }
}

