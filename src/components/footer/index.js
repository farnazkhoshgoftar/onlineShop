import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="newsletter">
                <form>
                  <input
                    className="email"
                    type="email"
                    placeholder="ایمیل خود راوارد کنید"
                  />
                  <input className="register" type="submit" value="عضویت" />
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="sitemap">
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
    );
  }
}

export default Footer;
