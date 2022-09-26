import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }
  countVotes = (index) => {
    const newLanguages = [
      ...this.state.languages,
    ];
    newLanguages[index].votes++;
    this.setState({ languages: newLanguages });
    // console.log(newLanguages[index].votes);
    // console.log(this.state.languages[index]);
  };

  render() {
    return (
      <div className="items-center">
        {this.state.languages.map((item, i) => {
          return (
            <div className="tc bg-light-yellow br3 pa3 ma2 dib shadow-5 w5">
              {item.name} {item.votes}
              <button
                onClick={() => this.countVotes(i)}
              >
                Click Here
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
