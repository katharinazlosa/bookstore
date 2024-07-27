import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <div className="footer-component--column">
          <h3>COMPANY</h3>
          <a href="#aboutus">About us</a>
          <a href="#aboutus">Careers</a>
          <a href="#aboutus">Terms</a>
          <a href="#aboutus">Privacy</a>
          <a href="#aboutus">Interest Based Ads</a>
          <a href="#aboutus">Ad preferences</a>
          <a href="#aboutus">Help</a>
        </div>
        <div className="footer-component--column">
          <h3>WORK WITH US</h3>
          <a href="#aboutus">Authors</a>
          <a href="#aboutus">Advertise</a>
          <a href="#aboutus">Authors & ads blog</a>
        </div>
        <div className="footer-component--column">
          <h3>CONNECT</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
