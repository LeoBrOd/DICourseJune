import React from "react";
import Quotes from "./Quotes";

const DisplayQuote = ({ quotes }) => {
  return (
    <div className="tr">
      {quotes.map((user, i) => {
        return (
          <Quotes
            key={i}
            quote={quotes[i].quote}
            author={quotes[i].author}
          />
        );
      })}
    </div>
  );
};

export default DisplayQuote;
