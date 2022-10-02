import React from "react";

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lnmae: "",
      age: "",
    };
  }

  handleChange = (e) => {
    // [console.log(e.target.name, e.target.value);
    // console.log(e.target.type, e.target.checked);]
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  //   componentDidMount() {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
  //         "X-RapidAPI-Host":
  //           "restcountries-v1.p.rapidapi.com",
  //       },
  //     };

  //     fetch(
  //       "https://restcountries-v1.p.rapidapi.com/callingcode/57",
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response);
  //         this.setState({ response: response });
  //       })
  //       .catch((err) => console.error(err));
  //   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sample form
          <form>
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              value={this.state.fname}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              value={this.state.lname}
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <div>
              <input
                onChange={this.handleChange}
                type="radio"
                name="gender"
                value="male"
              />
              <p>Male</p>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                type="radio"
                name="gender"
                value="female"
              />{" "}
              <p>Female</p>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                type="radio"
                name="gender"
                value="other"
              />
              <p>Other</p>
            </div>
            <select
              name="selectedvalue"
              onChange={this.handleChange}
            >
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </form>
        </header>
      </div>
    );
  }
}

export default InputForm;
