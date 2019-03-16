import React, { Component } from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import View_Post from "../Components/View_Post.js";

class ViewPost extends Component {
  state = {
    postData: []
  };

  componentDidMount() {
    fetch("https://api.myjson.com/bins/86m7y")
      .then(data => data.json())
      .then(data => this.setState({ postData: data }));
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.state.postData.map(post => {
          return (
            <View_Post
              key={post.id}
              title={post.title}
              course={post.course}
              class_date={post.class_date}
              post_date={post.post_date}
              note={post.note}
              user={post.user}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default ViewPost;
