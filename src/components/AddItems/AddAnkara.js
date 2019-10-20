import React, { Component } from "react";
import axios from "axios";
//import React from "react";

import {
  HeaderText,
  FormContainer,
  FormBody,
  PictureContainer,
  CircleLoad
} from "./AddItemstyle";
import pic from "../../images/thumb.jpg";
const des = [
  "High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch Wax African Veritable Wax Veritable For Ankara Dresses 2019",
  "100% Cotton African Fabric Guaranteed Real Dutch Wax Veritable Wax High Quality African Print Fabric ",
  "2019 New Arrival Polyester Real Dutch Wax Fabric High Quality African Dutch Wax Fashion Print fabric"
];
export default class AddAnkara extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: Date.now(),
      description: des,
      image: "",
      image_url: "",
      name: "",
      price: 2,
      product_cat: "",
      product_color: "others",
      product_new: true,
      product_quantity: 10,
      pic: pic,
      imagePreviewUrl: "",
      picLoading: false,
      dataLoading: false,
      successResponse: "",
      error: ""
    };
  }
  componentDidMount() {
    this.props.handleToggle();
  }
  fileSelectedHandler = e => {
    // e.preventDefault();

    let reader = new FileReader();
    let image = e.target.files[0];
    console.log(image);
    reader.onloadend = () => {
      this.setState(
        {
          image: image,
          imagePreviewUrl: reader.result
        },
        () => {
          this.setState({
            pic: this.state.imagePreviewUrl
          });
          this.imageUploadHandler();
        }
      );
    };

    reader.readAsDataURL(image);
  };
  imageUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.image, this.state.image.name);
    axios
      .post(
        `https://us-central1-easy-shop-53cc2.cloudfunctions.net/api/products/image
    `,
        fd
      )
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          pic: data.imageUrl,
          successResponse: data.message,
          error: data.error
        });
      })
      .then(console.log("image upload successful"));
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };
  ////////  Data Submit Ankara//////////
  onSubmit = event => {
    event.preventDefault();
    let i = 0;
    if (this.state.product_cat == "Chiganvy") {
      i = 0;
    }
    if (this.state.product_cat == "Dominion") {
      i = 1;
    }
    if (this.state.product_cat == "Holland") {
      i = 2;
    }
    const newItem = {
      createdAt: Date.now(),
      description: this.state.description[i],
      image_url: this.state.pic,
      name: `${this.state.product_cat} Ankara Fabric ${this.state.product_color} pattern`,
      price: this.state.price,
      product_new: true,
      product_quantity: 10,
      product_cat: this.state.product_cat,
      product_color: this.state.product_color
    };
    // console.log(newItem);
    axios
      .post(
        "https://us-central1-easy-shop-53cc2.cloudfunctions.net/api/products",
        newItem
      )
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <>
        <HeaderText>
          <h3>Add Ankara</h3>
        </HeaderText>
        <FormContainer>
          <PictureContainer pic={this.state.pic}>
            <div></div>
            <span></span>
            <input type="file" onChange={this.fileSelectedHandler} />
            <button> upload</button>
          </PictureContainer>

          <FormBody>
            <form onSubmit={this.onSubmit}>
              <select name="product_cat" onChange={this.handleChange}>
                <option value=""> product category</option>
                <option value="Chiganvy">Chiganvy</option>
                <option value="Dominion">Dominion</option>
                <option value="Holland">Holland</option>
                <option value="Dominion">Aunty K</option>
                <option value="Dominion">Delight</option>
              </select>
              <select
                name="product_color"
                onChange={this.handleChange}
                required
              >
                <option value="">product color</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="others">others</option>
              </select>
              <select name="price" onChange={this.handleChange} required>
                <option value="">product price</option>
                <option value="5000">₦ 5000</option>
                <option value="5000">₦ 5500</option>
                <option value="10000">₦10000</option>
              </select>

              <button>Add</button>
            </form>
          </FormBody>
        </FormContainer>
      </>
    );
  }
}
AddAnkara.defaultProps = {
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
{
  /* <CircleLoad />; */
}

//https://us-central1-easy-shop-53cc2.cloudfunctions.net/api
