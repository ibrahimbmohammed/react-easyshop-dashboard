import React, { Component } from "react";
import {
  Main,
  TopCard,
  ProductCards,
  SectionHeaderContainer,
  ProductMain,
  ProductTable,
  ProductList,
  ProductTableHeader
} from "./DashBoardStyle";
import ankara from "../../images/IMG-20190919-WA0012.jpg";
import ankara2 from "../../images/IMG-20190919-WA0013.jpg";
import ankara3 from "../../images/IMG-20190919-WA0014.jpg";

// dummy data
const products = [
  {
    pic: ankara,
    name: "chiganvy",
    sold: "10 pcs",
    time: "20 pcs",
    available: "yesterday",
    date: "available"
  },
  {
    pic: ankara2,
    name: "chiganvy",
    sold: "10 pcs",
    time: "20 pcs",
    available: "yesterday",
    date: "available"
  },
  {
    pic: ankara3,
    name: "chiganvy",
    sold: "10 pcs",
    time: "20 pcs",
    available: "yesterday",
    date: "available"
  }
];

export default class DashBoard extends Component {
  componentDidMount() {
    this.props.handleToggle();
  }
  render() {
    return (
      <>
        <Main>
          <TopCard>
            {" "}
            <h3>Custormers</h3>
            <p>52</p>
          </TopCard>
          <TopCard>
            {" "}
            <h3>Orders</h3>
            <p>34</p>
          </TopCard>
          <TopCard>
            {" "}
            <h3>Store Items</h3>
            <p>75</p>
          </TopCard>
        </Main>
        <SectionHeaderContainer>
          <h2>Top selling products</h2>
          <span>
            <small>List of top selling products</small>
          </span>
        </SectionHeaderContainer>

        <ProductMain>
          <ProductCards>
            <img src={ankara} alt="girl" />

            <span>
              <p>African Wax chiganvy</p>
            </span>
          </ProductCards>
          <ProductCards>
            <img src={ankara2} alt="girl" />

            <span>
              <p>African Wax chiganvy</p>
            </span>
          </ProductCards>
          <ProductCards>
            <img src={ankara3} alt="girl" />

            <span>
              <p>African Wax chiganvy</p>
            </span>
          </ProductCards>
        </ProductMain>
        <SectionHeaderContainer>
          <h2>Recently added products</h2>
          <span>
            <small>List of products recently added</small>
          </span>
        </SectionHeaderContainer>
        <ProductTable>
          <ProductTableHeader>
            <li>Product</li>
            <li>Name</li>
            <li>Sold</li>
            <li>Sold</li>
            <li>Date</li>
            <li>Available</li>
          </ProductTableHeader>
          <br></br>
          <hr></hr>
          {products.map((product, i) => {
            return (
              <ProductList key={i}>
                <li>
                  <img src={product.pic} alt="girl"></img>
                </li>
                <li>{product.name}</li>
                <li>{product.sold}</li>
                <li>{product.time}</li>
                <li>{product.available}</li>
                <li>{product.date}</li>
              </ProductList>
            );
          })}
        </ProductTable>
      </>
    );
  }
}
