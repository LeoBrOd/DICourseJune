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

  render() {
    const filter = Countries.map((country) => {
      return Countries[i].includes(
        this.state.text.toLowerCase
      );
    });
    return (
      <>
        <input type="text" onChange={filter} />
      </>
    );
  }
}

export default AutoCompletedText;
