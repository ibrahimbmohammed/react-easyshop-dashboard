import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
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
import SimpleTable from "../../components/Tables/Table";
import LineChart from "../../components/GraphComponents/LineChart";
import BarChart from "../../components/GraphComponents/BarChart";
// import PieChart from "../../components/GraphComponents/PieChart";
import PieChart from "../../components/GraphComponents/Donut";
import ankara from "../../images/IMG-20190919-WA0012.jpg";
import ankara2 from "../../images/IMG-20190919-WA0013.jpg";
import ankara3 from "../../images/IMG-20190919-WA0014.jpg";
import Axios from "axios";

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
      currentWidth: "",
      items: [],
      isLoading: true,
      error: false
    };
  }
  componentDidMount() {
    this.props.handleToggle();
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    this.handleData();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScroll);
  }
  handleData = () => {
    Axios.get(
      `https://us-central1-easy-shop-53cc2.cloudfunctions.net/api/products/latest
    `
    )
      .then(doc => {
        this.setState({
          items: doc.data,
          isLoading: false
        });
      })
      .catch(err => console.error(err));
  };
  updateDimensions = () => {
    this.setState({ currentWidth: window.innerWidth });
  };

  render() {
    dayjs.extend(relativeTime);
    const { isLoading, items, error } = this.state;
    console.log(items);
    const currentWidth = this.state.currentWidth;
    console.log(currentWidth);
    return (
      <>
        <Main>
          {!currentWidth <= 738 ? (
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
            <SimpleTable items={items} isLoading={isLoading}></SimpleTable>
          </ProductTableHeader>
        </ProductTable>
      </>
    );
  }
}
