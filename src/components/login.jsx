import React from "react";
import "../styles/App.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: "",
      errorMessage: "",
      userName: ""
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneNoChange = (event) => {
    this.setState({ phNo: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangeValue = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleSubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const numbers = /^\d+$/;
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phNo === "" ||
      this.state.gender === "" ||
      this.state.password === ""
    ) {
      this.setState({ errorMessage: "All fields are mandatory", userName: "" });
      return;
    }
    if (!this.state.name.match(alphanumeric)) {
      this.setState({ errorMessage: "Name is not alphanumeric", userName: "" });
      return;
    }
    if (this.state.email.indexOf("@") < 1) {
      this.setState({ errorMessage: "Email must contain @", userName: "" });
      return;
    }

    if (!this.state.gender) {
      this.setState({
        errorMessage: "Please identify as male, female or others",
        userName: ""
      });
      return;
    }
    if (!numbers.test(this.state.phNo)) {
      this.setState({
        errorMessage: "Phone Number must contain only numbers",
        userName: ""
      });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({
        errorMessage: "Password must contain atleast 6 letters",
        userName: ""
      });
      return;
    }
    const user = this.state.email.substring(0, this.state.email.indexOf("@"));
    this.setState({
      userName: user,
      errorMessage: "",
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: ""
    });
  };

  render() {
    return (
      <>
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          data-testid="email"
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <div data-testid="gender" onChange={this.handleChangeValue}>
          <input type="radio" value="male" name="gender" defaultChecked />
          <label htmlFor="male">Male</label>
          <input type="radio" value="female" name="gender" />
          <label htmlFor="female">Female</label>
          <input type="radio" value="other" name="gender" />
          <label htmlFor="other">Other</label>
        </div>
        <input
          data-testid="phoneNumber"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={this.state.phNo}
          onChange={this.handlePhoneNoChange}
        />
        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button data-testid="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {this.state.userName && <div>Hello {this.state.userName}</div>}
      </>
    );
  }
}
