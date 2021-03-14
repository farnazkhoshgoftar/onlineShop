import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-xs-12 content">

            <h1> به فروشگاه اینترنتی بانی مد خوش آمدید</h1>
            <p>
              فروشگاه اینترنتی پوشاک بانی مد فروشگاه اینترنتی بانی مد فعالیت خود
              را در زمینه پوشاک به صورت تخصصی از سال 1393 بعنوان تنها فروشگاه
              آنلاین پوشاک جین وست آغاز نمود و با تلاشهای بی وقفه ضمن تنوع
              بخشیدن به انواع محصولات و همکاری با معتبرترین برندهای دنیا (جین
              وست، ساموئل و کوین، بالنو، جوتی جینز)، کیفیت اجناس خود را به میزان
              قابل توجهی افزایش داد که رضایت اکثریت مشتریان گرامی گواه بر این
              ادعاست.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
