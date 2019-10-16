import React, { Component } from "react";
import axios from "axios";
//import React from "react";

import {
  HeaderText,
  FormContainer,
  FormBody,
  PictureContainer
} from "./ManageStyled";
import pic from "../../images/thumb.jpg";
firebase.initializeApp(config);
export default class ManageProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: Date.now(),
      description: "",
      image: "",
      image_url: "",
      name: "",
      price: 2,
      product_cat: "",
      product_color: "others",
      product_new: true,
      product_quantity: 10
    };
  }
  fileSelectedHandler = e => {
    this.setState({
      image: e.target.files[0]
    });
  };
  imageUploadHandler=e=>{

  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const newItem = {
      product_cat: this.state.product_cat,
      product_color: this.state.product_color,
      price: this.state.price
    };
    console.log(newItem);
  };
  render() {
    return (
      <>
        <HeaderText>
          <h3>Add Ankara</h3>
        </HeaderText>
        <FormContainer>
          <PictureContainer pic={pic}>
            <div></div>
            <span></span>
            <input type="file" onChange={this.fileSelectedHandler} />
          </PictureContainer>
          <FormBody>
            <form onSubmit={this.onSubmit}>
              <select name="product_cat" onChange={this.handleChange}>
                <option value="chiganvy">chiganvy</option>
                <option value="Dominion">Dominion</option>
                <option value="Holland">Holland</option>
              </select>
              <select name="product_color" onChange={this.handleChange}>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="others">others</option>
              </select>
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
              <button>Add</button>
            </form>
          </FormBody>
        </FormContainer>
        <HeaderText>
          <h3>Add Ankara</h3>
        </HeaderText>
        <FormContainer>hello</FormContainer>
      </>
    );
  }
}

ManageProducts.defaultProps = {
  createdAt: Date.now(),
  description: "soft fablic",
  image_url: "",
  name: "African wax,chiganvy",
  price: 5500,
  product_cat: "chiganvy",
  product_color: "others",
  product_new: true,
  product_quantity: 3
};
