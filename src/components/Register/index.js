import { Component } from "react";

import "./index.css";

class Register extends Component {
  state = {
    isRegistered: false,
    showErrorMsg: false,
    registerMessage: "",
    name: "",
    username: "",
    password: "",
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onClickLogin = () => {
    const { history } = this.props;
    console.log(history);
    history.push("/login");
  };

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { name, username, password } = this.state;
    const userDetails = { name, username, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const url = "https://sample-vs-node.onrender.com/register";
    const response = await fetch(url, options);

    if (response.ok === true) {
      const data = await response.json();
      this.setState({
        isRegistered: true,
        registerMessage: data.message,
        showErrorMsg: false,
        message: data.message,
      });
    } else {
      const message = await response.text();
      console.log(message);
      this.setState({ isRegistered: false, message, showErrorMsg: true });
    }
  };

  renderRegisterSuccessView = () => {
    const { message } = this.state;

    return (
      <div>
        <p>{message}</p>
        <p>Click here to login</p>
        <button onClick={this.onClickLogin}>Login</button>
      </div>
    );
  };

  renderRegisterView = () => {
    const { name, username, password, message, showErrorMsg } = this.state;
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <h1>Register Now</h1>
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={this.onChangeName}
          required
        />
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
        <button type="submit">Submit</button>
        {showErrorMsg && <p>{message}</p>}
      </form>
    );
  };

  render() {
    const { isRegistered } = this.state;
    return (
      <div>
        {isRegistered
          ? this.renderRegisterSuccessView()
          : this.renderRegisterView()}
      </div>
    );
  }
}

export default Register;
