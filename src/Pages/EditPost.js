import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import EditPostDataField from "../Components/EditPostDataField.js";

import "../Components/Footer.css";
import "./Home.css";

class EditPost extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Edit Post</h2>
          <EditPostDataField />
        </div>
        <Footer />
      </div>
    );
  }
}

export default EditPost;
