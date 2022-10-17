import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      output: "",
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
          <h1>{this.state.output}</h1>
        </header>
      </div>
    );
  }
}

export default App;
