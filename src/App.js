import React, { Component } from "react";
import HomeHoc from "./pages/homeHoc";
import Header from "./components/header";
import Products from "./components/products/Products";
class App extends Component {
  render() {
    this.state = {
      productInformation: [
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117683435.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "هودی مردانه باینت کد 542 ",
          price: "۳۵۰/۰۰۰ تومان",
          size: ["lg", "xl"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117633546.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "هودی مردانه باینت کد 542-4",
          price: "۲۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },

        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/215c1eba16c89a65d7f171e7951d0b0c22a5b087_1600519080.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "هودی مردانه باینت کد 352-2",
          price: "۲۵۰/۰۰۰ تومان",
          size: ["lg", "xl"],
        },

        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/d0480860835822f15ae14753f9a566e9cefc27d1_1600518807.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: " هودی مردانه باینت کد 54",
          price: "۱۵۰/۰۰۰ تومان",
          size: ["md", "xl"],
        },

        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117603482.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: " هودی مردانه آر ان اس کد 15",
          price: "۴۸۰/۰۰۰ تومان",
          size: ["md", "xl"],
        },

        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/116828618.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: " هودی مردانه آر ان اس کد 60",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/116882947.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "هودی سرمه ای ساده کد 21",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/119321616.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "هودی مردانه سورمه ای کد 10",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117596885.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "سوییشرت مردانه کد 563-1",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },

        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117672676.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "سوییشرت مردانه باینت کد 579",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/116912470.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "سویشرت مردانه باینت کد 553",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117597018.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "سویشرت مردانه باینت کد 559",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117724278.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه توتو کد 1-1208",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "xl"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117724240.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه توتو کد 1208",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/119433171.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه سالومه کد 52410",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/119433215.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه سالومه کد 52412",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["sm", "xl"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/116916084.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه صورتی کد 20",
          price: "۲۰۰/۰۰۰ تومان",
          size: ["lg", "xl"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117672726.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه مدا کد 141040237",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/117625480.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه مانتو ولیعصر کد 49215",
          price: "۶۶۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/120406446.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه پاتن جامه مدل 1154-90",
          price: "۴۰۰/۰۰۰ تومان",
          size: ["lg", "xl"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/85ecd7303f7e36e75e5b9a974f313af1e5ccd463_1601210698.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه کد 1218",
          price: "۱۸۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/120289733.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه مدل Kh-wf007",
          price: "۴۷۰/۰۰۰ تومان",
          size: ["md", "xl"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/119217927.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه کد h544",
          price: "۲۵۰/۰۰۰ تومان",
          size: ["md", "lg"],
        },
        {
          ImgSrc:
            "https://dkstatics-public.digikala.com/digikala-products/120444915.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
          title: "پالتو زنانه آرمانی اکسچنج کد 6",
          price: "۴۵۰/۰۰۰ تومان",
          size: ["lg", "xl"],
        },
      ],
    };
    return (
      <HomeHoc>
        <Header />
        <Products information={this.state.productInformation} />
      </HomeHoc>
    );
  }
}

export default App;
