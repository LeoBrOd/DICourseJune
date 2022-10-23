import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      output: "",
      input: "",
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:8000/api/hello"
        );
        const data = await res.json();
        this.setState({
          message: data.message,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/world", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputText: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          output: response.outputText,
        });
      });
  };
  // async componentDidMount() {
  //   const res = await fetch(
  //     "http://localhost:8000/api/hello"
  //   );
  //   const data = await res.json();
  //   this.setState({
  //     message: data.message,
  //   });
  // }

  //   componentDidMount() {
  // fetch(
  //   "http://localhost:8000/api/hello"
  // );
  // .then((response) => response.json())
  // .then((response) => {
  //   console.log(response);
  //   this.setState({
  //     message: response.message,
  //   });
  // })
  // .catch((err) => console.error(err));
  // }

  // getFromPost = (e) => {
  //   e.preventDefault();
  //   const fetchInput = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8000/api/world"
  //       );
  //       const data = await response.json();
  //       this.setState({
  //         output: data.outputText,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchInput();
  // };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <div className="">
            <h1>Post to Server:</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                name="inputText"
                placeholder="Input your text"
                type="text"
              />
              <input
                type="submit"
                value="submit"
              />
            </form>
          </div>
          <h1>{this.state.output}</h1>
        </header>
      </div>
    );
  }
}

export default App;
