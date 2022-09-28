import React from "react";

const Quotes = ({ quote, author }) => {
  return (
    <div className="br3 pa3 ma2 grow bw2 shadow-5 w-50">
      <h2 className="tl">"{quote}"</h2>
      <p className="tr">{author}</p>
      <button className="tr br1 pa1 ma1 bw1">
        New Quote
      </button>
    </div>
  );
};

export default Quotes;
