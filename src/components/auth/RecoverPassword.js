import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class RecoverPassword extends Component {
  state = {
    email: "",
    submitted: false
  }

  handleChange = e => {
    this.setState({ email: e.target.value })
  }

  sendPasswordResetEmail = e => {
    e.preventDefault()
    const { email } = this.state
  //  axios.post(`${}/reset_password/user/${email}`)
    this.setState({ email: "", submitted: true })
  }

  render() {
    const { email, submitted } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
        <h3>Reset your password</h3>
        {submitted ? (
          <div className="flow-text grey-text text-darken-1">
            <p>
              If that account is in our system, we emailed you a link to reset
              your password.
            </p>
            <Link to="/login" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i>Return to sign in
            </Link>
          </div>
        ) : (
          <div className="flow-text grey-text text-darken-1">
            <p>
              It happens to the best of us. Enter your email and we'll send you
              reset instructions.
            </p>
            <form onSubmit={this.sendPasswordResetEmail}>
              <input
                onChange={this.handleChange}
                value={email}
                placeholder="Email address"
              />
              <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Send 
                </button>
            </form>
            <Link to="/login">I remember my password</Link>
          </div>
        )
        }
      </div>
      </div>
      </div>
  
    );
  }
}

export default RecoverPassword;