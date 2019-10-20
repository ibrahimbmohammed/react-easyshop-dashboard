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
    this.state = {
      date: new Date(),
      toggle: true,
      currentWidth: "",
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  updateDimensions = () => {
    this.setState({ currentWidth: window.innerWidth });
  };
  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
    this.handleInnerWidth();
  };
  handleInnerWidth = () => {
    let mywidth = window.innerWidth;
    console.log(mywidth);
  };

  // sorry ,very clumpsy :(
  CloseSideBar = () => {
    this.handleToggle();
  };
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SideBar
            toggle={this.state.toggle}
            CloseSideBar={this.CloseSideBar}
            currentWidth={this.state.currentWidth}
          />
          <Navbar
            handleToggle={this.handleToggle}
            visibles={this.state.visible}
          />

          <Wrapper>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <DashBoard {...props} handleToggle={this.handleToggle} />
                )}
              />
              <Route
                exact
                path="/manage"
                render={props => (
                  <ManageProducts {...props} handleToggle={this.handleToggle} />
                )}
              />
              <Route
                exact
                path="/store"
                render={props => (
                  <StoreItems {...props} handleToggle={this.handleToggle} />
                )}
              />
              <Route
                exact
                path="/login"
                render={props => (
                  <Login {...props} handleToggle={this.handleToggle} />
                )}
              />
            </Switch>
          </Wrapper>
        </ThemeProvider>
      </>
    );
  }
}

// how you pass props to a route component

{
  /* <Route
path="/dashbaord"
render={(props)=><DashBoard {...props} isAuthed={true}/>}
/> */
}

// componentWillMount() {
//   this.unlisten = this.props.history.listen((location, action) => {
//     console.log("on route change");
//   });
// }
// componentWillUnmount() {
//   this.unlisten();
// }// componentWillMount() {
//   this.unlisten = this.props.history.listen((location, action) => {
//     console.log("on route change");
//   });
// }
// componentWillUnmount() {
//   this.unlisten();
// }
