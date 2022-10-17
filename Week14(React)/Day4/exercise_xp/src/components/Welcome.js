import React from "react";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      submited: false,
    };
    this.handleChange =
      this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      submited: true,
    });
    console.log(this.state);
  };

  handleReset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      submited: false,
    });
  };

  render() {
    if (this.state.submited === false) {
      return (
        <div>
          <h1>Welcome!</h1>
          <p>
            Please provide your information below.
          </p>
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number"
              onChange={this.handleChange}
              maxLength="10"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChange}
              required
            />
            <button
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            {this.state.lastName},
            {this.state.firstName}
          </h3>
          <h3>
            {this.state.phoneNumber}|
            {this.state.email}
          </h3>
          <button onClick={this.handleReset}>
            Reset
          </button>
        </div>
      );
    }
  }
}

export default Welcome;
