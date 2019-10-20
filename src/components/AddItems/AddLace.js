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

export default class AddLace extends Component {
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
    const newItem = {
      createdAt: Date.now(),
      description: "",
      image_url: this.state.pic,
      name: `${this.state.product_cat} Ankara Fabric ${this.state.product_color} pattern`,
      price: this.state.price,
      product_new: true,
      product_quantity: 10,
      product_cat: this.state.product_cat,
      product_color: this.state.product_color
    };
    console.log(newItem);
  };

  render() {
    return (
      <>
        <HeaderText>
          <h3>Add Lace</h3>
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
                <option value="Swiss Lace">Swiss Lace</option>
                <option value="Voile Lace">Voile Lace</option>
                <option value="Lace">Lace</option>
              </select>
              <select name="product_color" onChange={this.handleChange}>
                <option value="">product color</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="others">others</option>
              </select>
              <select name="price" onChange={this.handleChange}>
                <option value="">product price</option>
                <option value="15000">₦ 15000</option>
                <option value="25000">₦ 25000</option>
                <option value="10000">₦35000</option>
              </select>

              <button>Add</button>
            </form>
          </FormBody>
        </FormContainer>
      </>
    );
  }
}

AddLace.defaultProps = {
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
