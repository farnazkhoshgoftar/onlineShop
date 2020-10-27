import React, { Component } from "react";
import "./Layout.css";
import "./GridSystem.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";
class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="wrapper">
          <div className="content">{this.props.children}</div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Layout;
