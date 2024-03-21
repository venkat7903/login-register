import { Component } from "react";

class Login extends Component {
  state = { username: "", password: "", showErrorMsg: false, errorMsg: "" };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitDetails = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const url = "https://sample-vs-node.onrender.com/login";
    const userDetails = { username, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);

    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      this.setState({ showErrorMsg: false });
    } else {
      const msg = await response.text();
      this.setState({ showErrorMsg: true, errorMsg: msg });
    }
  };

  render() {
    const { username, password, showErrorMsg, errorMsg } = this.state;
    return (
      <form className="form-container" onSubmit={this.onSubmitDetails}>
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
        <button type="submit">Login</button>
        {showErrorMsg && <p>{errorMsg}</p>}
      </form>
    );
  }
}

export default Login;
