import React from "react";
import Button from "./button";

const BannerShop = () => {
  return (
    <>
      <div className="banner-bck">
        <div className="banner-txt">
          <h4>Make your life beautiful with us</h4>
          <Button
            position="bannerposition"
            text="Shop now"
            onClick={() => (window.location.href = "/bookshop")}
          />
        </div>
      </div>
    </>
  );
};

export default BannerShop;
