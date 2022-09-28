import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();

    return (
      <div
        className="br3 pa3 ma2 grow bw2 shadow-5 w-50"
        style={{ color: randomColor }}
      >
        <h2 className="tl">
          "{this.props.quote}"
        </h2>
        <p className="tr">
          -
          {this.props.author
            ? this.props.author
            : "Unknown"}
          -
        </p>
        <button
          style={{ backgroundColor: randomColor }}
          className="tr br2 pa1 ma1 bw2"
          onClick={this.props.handleClick}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;
