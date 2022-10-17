import React from "react";

class NewBookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      genre: "",
      dateOfPublish: Date,
      message: "",
    };
    this.handleChange =
      this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendData = (e) => {
    e.preventDefault();
    this.setState({ message: "Data sent!" });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.sendData}>
          <h1>New Book</h1>
          <p>{this.state.message}</p>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
          />
          <label>Author</label>
          <input
            type="text"
            name="author"
            onChange={this.handleChange}
          />
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            onChange={this.handleChange}
          />
          <label>Year Published</label>
          <input
            type="number"
            name="dateOfPublish"
            maxLength="4"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default NewBookForm;
