import React from "react";
import Header from "./header";
import Banner from "./banner";
import Companies from "./companies";
import ImgSlider from "./imgSlider";
import Benefits from "./benefits";
import Footer from "./footer";
import BannerShop from "./bannerShop";
import ReviewsList from "./reviewList";
import LinkButton from "./linkBtn";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <Banner />
        <Companies />
        <ImgSlider />
        <Benefits />
        <ReviewsList />
        <BannerShop />
        <Footer />
        <LinkButton to="/bookshop" label="Show Book Shop" />
      </div>
    </>
  );
};

export default Layout;
