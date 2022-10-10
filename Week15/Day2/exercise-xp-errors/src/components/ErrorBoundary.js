import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: {},
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error });
    this.setState({ errorInfo: errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h2>Something went wrong.</h2>
          <details>
            <div>
              {this.state.error &&
                this.state.error.toString()}
            </div>
            <p>
              {
                this.state.errorInfo
                  .componentStack
              }
            </p>
          </details>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
