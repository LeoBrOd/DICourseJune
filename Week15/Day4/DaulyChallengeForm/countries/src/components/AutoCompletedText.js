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
    const filter = (e) => {
      let search = e.target.value;
      const suggestions = Countries.map((i) =>
        i.includes(search.toLowerCase())
      );
      console.log(suggestions);
    };
    return (
      <>
        <input type="text" onChange={filter} />
      </>
    );
  }
}

export default AutoCompletedText;
