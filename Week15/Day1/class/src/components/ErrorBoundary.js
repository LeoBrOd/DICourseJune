import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error", error);
    console.log("errorInfo", errorInfo);
    this.setState({ error: error });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h2>
            Something went wrong but you still
            could use the App
          </h2>
          <detail>
            {this.state.error &&
              this.state.error.toString()}
          </detail>
        </>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
