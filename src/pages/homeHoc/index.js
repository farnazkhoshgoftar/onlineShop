import React, { Component } from "react";
import "./GridSystem.css";
import Navbar from "../../components/navbar"
import Footer from "../../components/footer";

class HomeHoc extends Component {
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

export default HomeHoc;
