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
import LineChart from "../../components/GraphComponents/LineChart";
import BarChart from "../../components/GraphComponents/BarChart";
// import PieChart from "../../components/GraphComponents/PieChart";
import PieChart from "../../components/GraphComponents/Donut";
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
  constructor(props) {
    super(props);
    this.state = {
      currentWidth: ""
    };
  }
  componentDidMount() {
    this.props.handleToggle();
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ currentWidth: window.innerWidth });
  };

  render() {
    const currentWidth = this.state.currentWidth;
    console.log(currentWidth);
    return (
      <>
        <Main>
          {currentWidth <= 738 ? (
            <>
              {" "}
              <TopCard>
                <h3>Custormers</h3>
                <p>111</p>
              </TopCard>
              <TopCard>
                <h3>Orders</h3>
                <p>111</p>
              </TopCard>
              <TopCard>
                <h3>Store Items</h3>
                <p>111</p>
              </TopCard>
            </>
          ) : (
            <>
              <TopCard>
                <div>
                  <LineChart />
                </div>
              </TopCard>
              <TopCard>
                <BarChart />
              </TopCard>
              <TopCard>
                <PieChart />
              </TopCard>
            </>
          )}
        </Main>
        <SectionHeaderContainer>
          <h2>Top selling products</h2>
          <span>
            <small>List of top selling products</small>
          </span>
        </SectionHeaderContainer>

        <ProductMain>
          <ProductCards pic={ankara}>
            {/* <img src={ankara} alt="girl" /> */}
          </ProductCards>
          <ProductCards pic={ankara2}>
            {/* <img src={ankara2} alt="girl" /> */}
          </ProductCards>
          <ProductCards pic={ankara3}>
            {/* <img src={ankara3} alt="girl" /> */}
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
