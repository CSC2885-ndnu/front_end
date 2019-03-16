import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form error being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class CLogout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ndnuId: null,
      email: null,
      password: null,
      formErrors: {
        ndnuId: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      Ndnu Id: ${this.state.ndnuId}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "ndnuId":
        formErrors.ndnuId =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="container">
        <div className="Wrapper float-right">
          <div className="form-wrapper float-right">
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="ndnuId">
                <label htmlFor="ndnuId">NDNU ID</label>
                <input
                  className={formErrors.ndnuId.length > 0 ? "error" : null}
                  placeholder="NDNU ID"
                  type="text"
                  name="ndnuId"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.ndnuId.length > 0 && (
                  <span className="errorMessage">{formErrors.ndnuId}</span>
                )}
              </div>

              <div className="password">
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit" to="/loggin">
                  Log In
                </button>
              </div>
              <div className="createSumbit">
                <Link type="submit" to="/">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CLogout;
