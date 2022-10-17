import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert(
      "THe component named Header is about to be unmounted"
    );
  }
  render() {
    return (
      <div>
        <h2>Hello World!</h2>
      </div>
    );
  }
}

export default Child;
