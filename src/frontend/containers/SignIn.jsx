import React from "react";
import "../styles/SignIn.scss";
import { connect } from "react-redux";
import postUser from "../utils/postUser";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  clearForm(e) {
    const { username, password } = e.target;
    username.value = "";
    password.value = "";
    this.setState({
      username: "",
      password: ""
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.dispatch(postUser(user));

    this.clearForm(e);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    return (
      <>
        <div className="sign-body">
          <h1 className="h1">Sign In</h1>
          <form className="sign-form" onSubmit={this.handleSubmit} name="form">
            <div className="form-group m-3">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={this.handleChange}
              />
              <div className="sign-footer mt-5">
                <button type="submit" className="btn btn-theme">
                  Submit
                </button>
                {this.state.loading && (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log("SIGN IN MAPTOSTATEPROPS:", state.auth);
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(SignIn);
