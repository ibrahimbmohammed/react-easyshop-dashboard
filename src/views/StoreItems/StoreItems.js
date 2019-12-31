import React, { Component } from "react";
import Grid from "../../components/Grid/Grid";
import pic from "../../images/IMG-20190919-WA0016.jpg";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default class StoreItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
      isLoading: true,
      error: false,
      newitems: ""
    };
  }

  componentDidMount() {
    this.props.handleToggle();
    this.setState({ items: this.state.iteems });
    this.handleData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({ newitems: this.state.items });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.items !== this.state.items; // Don't re-render if name is equal
  }

  handleData = () => {
    Axios.get(
      `https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/products
    `
    )
      .then(doc => {
        this.setState({
          items: doc.data,
          isLoading: false
        });
        console.log(this.state.items);
      })
      .catch(err => {
        this.setState({
          error: true,
          dataLoading: false
        });
        toast("Something went wrong", { type: "error" });
      });
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
      `https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/products/delete/${Id}`
    )
      .then(doc => {
        this.setState({
          dataLoading: false
          // items: doc.data
        });
        this.handleData();
        toast("item deleted", { type: "success" });
      })
      .catch(err => {
        this.setState({
          error: true,
          dataLoading: false
        });
        toast("Something went,please try again", { type: "error" });
      });
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
