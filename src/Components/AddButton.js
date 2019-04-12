import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default class AddButton extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            studentId: '',
            isHidden: true
        }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        alert("Student name: " + this.state.studentName + " StudentId: " + this.state.studentId); 
    }
    
    handleChange  = (e) => {
        this.setState({
            [e.target.name]: e.target.value
    
        });
    };

      toggleHidden () {
        this.setState ({
            isHidden: !this.state.isHidden
        })
    }
   
    render() {
        return (
            <div>
                <Button
                    variant="primary" 
                    onClick={this.toggleHidden.bind(this)} 
                    size="lg" active>
                    Add Student
                </Button>
                {!this.state.isHidden && <Child handleSubmit={this.handleSubmit} onChange={this.handleChange} studentName={this.state.studentName} studentId={this.state.studentId} />}
            </div>
           
        )
    }    
}
const Child = props => {
    return (
    <div className='form'>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control 
                    name="studentName" 
                    value ={props.studentName} 
                    placeholder="Student name" 
                    onChange={props.onChange}
                    />
                </Col>
                <Col>
                    <Form.Control 
                    name="studentId" 
                    value ={props.studentId} 
                    placeholder="Student ID" 
                    onChange={props.onChange} 
                    />
                </Col>
            </Form.Row>
            <Button
                onClick={props.handleSubmit}
                variant="primary" 
                type="submit">
                Submit
              </Button>
        </Form>
    </div>
    )
}