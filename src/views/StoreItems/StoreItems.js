import React, { Component } from "react";
import Grid from "../../components/Grid/Grid";
import pic from "../../images/IMG-20190919-WA0016.jpg";
import Axios from "axios";

const item = [
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  },
  {
    body: {
      createdAt: "2019-10-26T02:42:25.869Z",
      description:
        "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
      image_url: pic,
      name: "Chiganvy Ankara Fabric blue pattern",
      price: "5000",
      product_cat: "Chiganvy",
      product_new: true,
      product_quantity: 10
    },
    id: "TVKaVUHH9efuVPNRIIPD"
  }
];
export default class StoreItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: item,
      isLoading: true,
      error: false,
      newitems: ""
    };
  }

  componentDidMount() {
    this.props.handleToggle();
    // this.setState({ items: this.state.iteems });
    // this.handleData();
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.items !== prevProps.items) {
  //     this.setState({ newitems: this.state.items });
  //   }
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.items !== this.state.items; // Don't re-render if name is equal
  // }

  handleData = () => {
    Axios.get(
      `https://us-central1-easy-shop-53cc2.cloudfunctions.net/api/products
    `
    )
      .then(doc => {
        this.setState({
          items: doc.data,
          isLoading: false
        });
        console.log(this.state.items);
      })
      .catch(err => console.error(err));
  };
  handleUiUpdate = Id => {
    const filteredItems = this.state.items.filter(item => item.id !== Id);
    this.setState({ items: filteredItems }, () => {
      // return { newitems: [...this.state.items, filteredItems] };
    });
  };

  handleDelete = Id => {
    console.log(Id);
    Axios.get(
      `https://us-central1-easy-shop-53cc2.cloudfunctions.net/api/products/delete/${Id}`
    )
      .then(doc => {
        console.log(this.state.newitems);
      })
      .catch(err => console.error(err));
    this.handleUiUpdate(Id);
  };

  render() {
    const { items, isLoading, newitems } = this.state;
    console.log(items);
    return (
      <>
        <Grid
          newitems={newitems}
          items={items}
          isLoading={this.state.isLoading}
          handleDelete={this.handleDelete}
          handleUiUpdate={this.handleUiUpdate}
        ></Grid>
      </>
    );
  }
}
