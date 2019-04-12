import React from 'react';
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import PostTable from "../Components/PostTable.js";
import TeacherClassView from './TeacherClassView.js';


//Change isAdmin to see student view

class classPage extends React.Component {

    state  = {
        isAdmin: true
    }
    render() {
        const isAdmin = this.state.isAdmin;
        if(isAdmin) {
            return (
                <div>
                    <Navbar />
                    <TeacherClassView />
                    <Footer />
                </div>
            );
        } else {
            return (
                <div>
                    <Navbar />
                    <PostTable />
                    <Footer />
                </div>
            );
        }
    }
}

export default classPage;