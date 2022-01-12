import { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  onLogin = async () => {
    console.log(this.state);
    var response = await fetch(
      `http://localhost:5001/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );
    var body = await response.json();
    console.log(body);
    if (body.length > 0) {
      this.setState({ message: <span className="text-success">Success</span> });
    } else {
      this.setState({ message: <span className="text-danger">Error</span> });
    }
  };

  render() {
    return (
      <div className="p-3 col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="form-group form-row">
          <label className="col-lg-4">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <div className="form-group form-row">
            <label className="col-lg-4">Password:</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            />
          </div>

          <div className="pt-2 text-end">
            {this.state.message}
            <button onClick={this.onLogin} className="btn btn-primary ">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
