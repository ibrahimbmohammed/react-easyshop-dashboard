import React, { Component } from "react";
import {
  Main,
  TopCard,
  ProductCards,
  SectionHeaderContainer,
  ProductMain,
  ProductTable,
  ProductList
} from "./DashBoardStyle";
import ankara from "../../images/IMG-20190919-WA0012.jpg";
import ankara2 from "../../images/IMG-20190919-WA0013.jpg";
import ankara3 from "../../images/IMG-20190919-WA0014.jpg";

export default class DashBoard extends Component {
  render() {
    return (
      <>
        <Main>
          <TopCard>
            {" "}
            <h1>New Custormers</h1>
            <p>52</p>
          </TopCard>
          <TopCard>
            {" "}
            <h1>Orders</h1>
            <p>34</p>
          </TopCard>
          <TopCard>
            {" "}
            <h1>Store Items</h1>
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

            <span> African Wax chiganvy</span>
          </ProductCards>
          <ProductCards>
            <img src={ankara2} alt="girl" />

            <span> African Wax chiganvy</span>
          </ProductCards>
          <ProductCards>
            <img src={ankara3} alt="girl" />

            <span> African Wax chiganvy</span>
          </ProductCards>
        </ProductMain>
        <SectionHeaderContainer>
          <h2>Top selling products</h2>
          <span>
            <small>List of top selling products</small>
          </span>
        </SectionHeaderContainer>
        <ProductTable>
          <ProductList>
            <li>
              <img src={ankara} alt="girl"></img>
            </li>
            <li>Chiganvy</li>
            <li>10 pcs</li>
            <li>20 pcs</li>
            <li>yesterday</li>
            <li>Available</li>
          </ProductList>
        </ProductTable>
      </>
    );
  }
}
