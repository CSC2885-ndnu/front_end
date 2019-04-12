import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import ContactUs from "./Pages/ContactUs.js";
import Privacy from "./Pages/Privacy.js";
import LoggIn from "./Pages/LoggIn.js";
import Logout from "./Pages/Logout.js";
import ViewPost from "./Pages/ViewPost.js";
import EditPost from "./Pages/EditPost.js";
import WelcomePage from "./Pages/WelcomePage";
import MyAccount from "./Pages/MyAccount";
import Formx from "./Pages/Post";
import TermsofUse from "./Pages/TermsofUse.js";
import classPage from './Pages/classPage';
import AdminPage from './Pages/AdminPage';
import AdminFullPage from './Pages/AdminFullPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Privacy" component={Privacy} />
          <Route exact path="/LoggIn" component={LoggIn} />
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/ViewPost" component={ViewPost} />
          <Route exact path="/EditPost" component={EditPost} />
          <Route exact path="/WelcomePage" component={WelcomePage} />
          <Route exact path="/MyAccount" component={MyAccount} />
          <Route exact path="/Post" component={Formx} />
          <Route exact path="/TermsofUse" component={TermsofUse} />
          <Route exact path="/classPage" component={classPage} />
          <Route exact path="/AdminPage" component={AdminPage} />
          <Route exact path="/AdminFullPage" component={AdminFullPage} />
          
        </div>
      </Router>
    );
  }
}

export default App;
