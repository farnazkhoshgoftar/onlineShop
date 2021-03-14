import React, { Component } from "react";
import "./Products.css";
class Products extends Component {
  render() {
    return (
      <div id="products">
          <div className="row">
            <div className="col-xs-12">
              <div id="products">
                <h2>لیست محصولات و خدمات</h2>
              </div>
            </div>
            {this.props.information.map((item, key) => {
              return (
                <div key={key} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="center">
                    <a href="#">
                      <img src={item.ImgSrc} />
                      <h3>{item.title}</h3>
                      <div className="flex">
                        <div>
                          {item.size.map((sizeName, sizeKey) => {
                            return <span id='size' key={sizeKey}>{sizeName}</span>;
                          })}
                        </div>
                        <span id="price">{item.price}</span>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    );
  }
}
export default Products;
