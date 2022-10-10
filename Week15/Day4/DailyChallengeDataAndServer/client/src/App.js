import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
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
    const fetchInput = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/world"
        );
        const data = await response.json();
        console.log(data.outputText);
        this.setState({
          input: data.inputText,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchInput();
  }

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <div className="">
            <h1>Post to Server:</h1>
            <form
              method="POST"
              action="http://localhost:8000/api/world"
            >
              <input
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
          <h1>{this.state.input}</h1>
        </header>
      </div>
    );
  }
}

export default App;
