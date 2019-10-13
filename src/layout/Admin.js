import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//components
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
// styles
import GlobalStyle from "../components/Wrapper/GlobalStyle";
import Wrapper from "../components/Wrapper/Wrapper";
import { ThemeProvider } from "styled-components";
// routes
import DashBoard from "../views/DashBoard/DashBoard";
import ManageProducts from "../views/ManageProducts/ManageProducts";
import StoreItems from "../views/StoreItems/StoreItems";
import Login from "../views/Login/Login";
const theme = {
  font: "",
  background: "#725374",
  backgroundColor: "white",
  color: "",
  fontWeight: ""
};

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), toggle: true };
  }

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Navbar handleToggle={this.handleToggle} />
          <Wrapper>
            <SideBar />
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route exact path="/manage" component={ManageProducts} />
              <Route exact path="/store" component={StoreItems} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Wrapper>
          <Footer />
        </ThemeProvider>
      </>
    );
  }
}
