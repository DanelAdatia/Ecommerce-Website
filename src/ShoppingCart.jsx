import { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount = async () => {
    var response = await fetch("http://localhost:5001/products", {
      method: "GET",
    });
    var prods = await response.json();

    this.setState({ products: prods });
  };

  handleIncrement = (product, maxValue) => {
    console.log("handleIncrement", product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };
  handleDecrement = (product, minValue) => {
    console.log("handleDecrement", product);

    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (window.confirm("Are you sure you want to delete?")) {
      allProducts.splice(index, 1);

      this.setState({ products: allProducts });
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}
