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
import routes from "../routes";

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
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                // handle Notification
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

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
            <Switch>{this.getRoutes(routes)}</Switch>
          </Wrapper>
          <Footer />
        </ThemeProvider>
      </>
    );
  }
}
