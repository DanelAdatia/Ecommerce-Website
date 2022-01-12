import { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    return (
      <div className="col-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
                className="pull-right hand-icon"
              >
                <i className="fa fa-times"></i>
              </span>
            </div>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
            <div className="card-footer">
              <div className="float-start">
                <span className="badge bg-light text-dark">
                  {this.state.product.quantity}
                </span>
                <div className="btn-group">
                  <button
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 10);
                    }}
                    className="btn btn-outline-success"
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      this.props.onDecrement(this.state.product, 0);
                    }}
                    className="btn btn-outline-success"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="float-end">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
