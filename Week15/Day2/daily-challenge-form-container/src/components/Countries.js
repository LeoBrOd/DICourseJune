import React from "react";

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          countries: response,
        });
        // console.log(response);
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { countries } = this.state;
    return (
      <>
        <select
          name="selectedcountry"
          onChange={this.props.handleChange}
        >
          <option defaultValue="--Please choose a destination--">
            --Please choose a destination--
          </option>
          {countries.map((user, i) => {
            return (
              <option
                key={countries[i].alpha2Code}
                value={countries[i].name}
              >
                {countries[i].name}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}
export default Countries;
