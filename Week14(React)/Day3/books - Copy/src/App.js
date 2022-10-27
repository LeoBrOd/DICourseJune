import React from "react";
import "./App.css";
import books from "./books.json";
import Book from "./components/Book";
import Store from "./components/Store";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      stores: [],
      title: "My Books Shop",
    };
  }

  getStores = () => {
    fetch(
      "https://logical-calf-89.hasura.app/api/rest/stores"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ stores: data.stores });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    // this.setState({title:'My New Book Shop'})
    fetch(
      "https://logical-calf-89.hasura.app/api/rest/books"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ arr: data.books });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div>
          <button onClick={this.getStores}>
            Get My Stores
          </button>
        </div>

        <div>
          {this.state.stores.map((item) => {
            return (
              <Store store={item} key={item.id} />
            );
          })}
        </div>

        <div>
          {this.state.arr.map((item, i) => {
            return (
              <Book book={item} key={item.id} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
