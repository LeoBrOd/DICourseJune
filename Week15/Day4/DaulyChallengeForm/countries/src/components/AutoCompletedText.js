import React from "react";
import Countries from "./Countries";

class AutoCompletedText extends React.Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  handleChange = (e, counrty) => {
    const searchWord = e.target.value;
    function filterCountries(country) {
      return country.toLowerCase().includes("a");
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
        />
        {/* {Countries.map((item, i) => {
          return <p key={i}>{Countries[i]}</p>;
        })} */}
        <p>{Countries}</p>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default AutoCompletedText;
