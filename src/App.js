import React, { Component } from "react";
import { Layout, Navigation, Drawer, Content, Header } from "react-mdl";
import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <h2> Portfolio </h2>
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <h2> Portfolio </h2>
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div tabIndex="-1" className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
