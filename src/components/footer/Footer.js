import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        {/* <div className="wrapper"> */}
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div id="newsletter">
                <form>
                  <input
                    id="email"
                    type="email"
                    placeholder="ایمیل خود راوارد کنید"
                  />
                  <input id="register" type="submit" value="عضویت" />
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div id="sitemap">
                <ul>
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
            </div>
          </div>
        </div>
      // </div>
    );
  }
}

export default Footer;
