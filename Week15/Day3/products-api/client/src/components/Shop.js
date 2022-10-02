import React from "react";


class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:5001/api/products/all"
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response,
        });
        // console.log(response);
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Shop</h1>
        <div class="shop">
          {products.map((user, i) => {
            return (
              <div class ='product' key={products[i].id}>
                <h1>{products[i].name}</h1>
                <h3>{products[i].price}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Shop;
