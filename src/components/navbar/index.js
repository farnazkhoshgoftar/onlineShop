import React, { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
  openMenu = () => {
    let container = document.getElementById("container");
    if (container.classList.contains("change")) {
      container.classList.remove("change");
    } else {
      container.classList.add("change");
    }
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  render() {
    return (
      <div id="navbar">
        <span>
          <div onClick={this.openMenu} id="container">
            <div className="lines line1"></div>
            <div className="lines line2"></div>
            <div className="lines line3"></div>
          </div>
        </span>
        <ul id="myLinks">
          <li>
            <a href="#">صفحه اصلی</a>
          </li>
          <li>
            <a href="#">همکاری با ما</a>
          </li>
          <li>
            <a href="#">تبلیغات</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
