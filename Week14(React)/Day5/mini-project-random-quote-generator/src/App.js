// import React, { Component } from "react";
// import "./App.css";
// import { quotes } from "./components/QuotesDatabase";

// import DisplayQuote from "./components/DisplayQuote";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       quote: quotes[0].quote,
//       author: quotes[0].author,
//     };
//   }

//   render() {
//     return (
//       <div className="tc">
//         <DisplayQuote quotes={quotes} />
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import DisplayQuote from "./components/DisplayQuote";
import quotes from "./components/QuotesDatabase";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(
      Math.random() * quotes.length
    );
    return quotes[randomNumber];
  }

  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  handleClick = () => {
    console.log(this.randomQuote());
    const generateRandomQuote =
      this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author,
    });
    this.shuffleQuotes(quotes);
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    return (
      <div className="tc">
        <DisplayQuote
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
