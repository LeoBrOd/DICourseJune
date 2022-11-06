import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Search for a movie ,TV series ..</h2>
        <form>
          <input
            type="text"
            placeholder="Search for a movie ,TV series .."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
