import React, { Component } from "react";
import axios from "axios";
//import React from "react";

import {
  HeaderText,
  FormContainer,
  FormBody,
  PictureContainer,
  CircleLoad,
  RingLoad
} from "./AddItemstyle";
import pic from "../../images/thumb.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const des = [
  "High Quality Swiss Voile Laces Switzerland Printed Cotton, African Dry Cotton Lace Fabric ",
  "white lace fabric 2019 high quality lace nigerian lace fabric for women dress african tulle lace",
  "Latest Embroidered Tulle Lace African  High Quality wax Lace Fabric Trim Sewing Women DIY Dress Party Nigerian Laces"
];
toast.configure();
export default class AddLace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: Date.now(),
      description: des,
      image: "",
      image_url: "",
      name: "",
      price: "",
      product_cat: "",
      product_sec_cat: "Lace",
      product_color: "",
      product_new: true,
      product_quantity: 10,
      pic: pic,
      imagePreviewUrl: "",
      picLoading: false,
      dataLoading: false,
      successResponse: "",
      error: false,
      product_token: ""
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
            pic: this.state.imagePreviewUrl,
            picLoading: true
          });
          this.imageUploadHandler();
        }
      );
    };

    reader.readAsDataURL(image);
  };
  handleClearError = () => {
    this.setState({
      error: ""
    });
  };
  notify = () => toast("item added successfully");
  handleClearToken = () => {
    this.setState({
      product_token: "",
      dataLoading: true
    });
  };
  imageUploadHandler = () => {
    this.handleClearError();
    const fd = new FormData();
    fd.append("image", this.state.image, this.state.image.name);
    axios
      .post(
        `https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/products/image
    `,
        fd
      )
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          picLoading: false,
          pic: data.imageUrl,
          successResponse: data.message
        });
      })
      .catch(error => {
        this.setState({
          error: error
        });
        throw error;
      });
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
    this.handleClearToken();
    let i = 0;
    if (this.state.product_cat == "Swiss Lace") {
      i = 0;
    }
    if (this.state.product_cat == "Voile Lace") {
      i = 1;
    }
    if (this.state.product_cat == "Lace") {
      i = 2;
    }
    const newItem = {
      createdAt: Date.now(),
      description: this.state.description[i],
      image_url: this.state.pic,
      name: `${this.state.product_cat} Fabric ${this.state.product_color} pattern`,
      price: this.state.price,
      product_new: true,
      product_quantity: 10,
      product_cat: this.state.product_cat,
      product_color: this.state.product_color,
      product_sec_cat: this.state.product_sec_cat
    };
    // console.log(newItem);
    axios
      .post(
        " https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/products",
        newItem
      )
      .then(res => {
        this.setState({ product_token: res.data, dataLoading: false });
        if (this.state.product_token) {
          // this.setState({ product_token: res.data });
          this.notify();
          console.log("success");
          this.setState({
            pic: pic,
            imagePreviewUrl: ""
          });
        } else {
          console.log("fail");
        }
      })
      .catch(err => {
        this.setState({
          error: true,
          dataLoading: false
        });
        toast("Something went wrong", { type: "error" });
      });
  };

  render() {
    const { picLoading, error, product_token } = this.state;
    console.log(error);
    console.log(product_token);
    return (
      <>
        <HeaderText>
          <h3>Add Lace</h3>
        </HeaderText>
        <FormContainer>
          {!picLoading ? (
            <PictureContainer pic={this.state.pic}>
              <div></div>
              <span></span>
              <input type="file" onChange={this.fileSelectedHandler} />
              <button> upload</button>
            </PictureContainer>
          ) : (
            <PictureContainer>
              <div>
                {error ? (
                  <h4>
                    oopps! something went wrong <br />
                    please try again
                  </h4>
                ) : (
                  <CircleLoad color={"#0063ff"} />
                )}
              </div>
              <span></span>
              <input type="file" onChange={this.fileSelectedHandler} />
              {error ? <button> retry</button> : <button> upload</button>}
            </PictureContainer>
          )}

          <FormBody>
            <form onSubmit={this.onSubmit}>
              <select name="product_cat" onChange={this.handleChange}>
                <option value=""> product category</option>
                <option value="Swiss Lace">Swiss Lace</option>
                <option value="Voile Lace">Voile Lace</option>
                <option value="Lace">Lace</option>
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
                <option value="yellow">yellow</option>
                <option value="purple">purple</option>
                <option value="gray">gray</option>

                <option value="brown">brown</option>
                <option value="others">others</option>
              </select>
              <select name="price" onChange={this.handleChange} required>
                <option value="">product price</option>
                <option value="10000">₦ 10000</option>
                <option value="11000">₦ 11000</option>
                <option value="15000">₦ 15000</option>
                <option value="25000">₦25000</option>
                <option value="35000">₦35000</option>
              </select>
              {this.state.dataLoading ? (
                <RingLoad color={"#0063ff"} />
              ) : (
                <button>Add</button>
              )}
            </form>
            <ToastContainer hideProgressBar />
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

//https://us-central1-easy-shop-53cc2.cloudfunctions.net/api
