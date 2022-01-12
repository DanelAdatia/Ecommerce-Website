import { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers List",
    customersCount: 2,
    customers: [
      {
        id: 1,
        name: "Hannah",
        phone: "7878754622",
        address: { city: "Chicago" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Selena",
        phone: null,
        address: { city: "Houston" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Miley",
        phone: null,
        address: { city: "Phoenix" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Justin",
        phone: 987456231,
        address: { city: "San Diego" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Hailey",
        phone: 1234567890,
        address: { city: "San Antonio" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  onRefresh = () => {
    this.setState({ customersCount: 5 });
  };

  PhoneToRender = (phone) => {
    if (phone) {
      return phone;
    } else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  onChangePicture = (custr, index) => {
    let custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/103/60";
    this.setState({ customers: custArr });
  };
  CustomerRow = () => {
    return this.state.customers.map((custr, index) => {
      return (
        <tr key={custr.id}>
          <td>{custr.id}</td>
          <td>
            <img src={custr.photo} alt="Customer"></img>
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePicture(custr, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{custr.name}</td>
          <td>{this.PhoneToRender(custr.phone)}</td>
          <td>{custr.address.city}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-dark m-2">{this.state.customersCount}</span>

          <button className="btn btn-info" onClick={this.onRefresh}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.CustomerRow()}</tbody>
        </table>
      </div>
    );
  }
}
