import React from "react";

const Footer = () => {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="footer__container">
        <div className="footer__column">
          <h3 className="footer__title" id="footer-heading">
            Company
          </h3>
          <ul className="footer__list" role="list">
            <li role="listitem">
              <a href="#aboutus" className="footer__link">
                About us
              </a>
            </li>
            <li role="listitem">
              <a href="#careers" className="footer__link">
                Careers
              </a>
            </li>
            <li role="listitem">
              <a href="#terms" className="footer__link">
                Terms
              </a>
            </li>
            <li role="listitem">
              <a href="#privacy" className="footer__link">
                Privacy
              </a>
            </li>
            <li role="listitem">
              <a href="#ads" className="footer__link">
                Interest-Based Ads
              </a>
            </li>
            <li role="listitem">
              <a href="#preferences" className="footer__link">
                Ad Preferences
              </a>
            </li>
            <li role="listitem">
              <a href="#help" className="footer__link">
                Help
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Work With Us</h3>
          <ul className="footer__list" role="list">
            <li role="listitem">
              <a href="#authors" className="footer__link">
                Authors
              </a>
            </li>
            <li role="listitem">
              <a href="#advertise" className="footer__link">
                Advertise
              </a>
            </li>
            <li role="listitem">
              <a href="#authors-ads-blog" className="footer__link">
                Authors & Ads Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Connect</h3>
          <ul className="footer__list" role="list">
            <li role="listitem">
              <a href="#facebook" className="footer__link">
                Facebook
              </a>
            </li>
            <li role="listitem">
              <a href="#instagram" className="footer__link">
                Instagram
              </a>
            </li>
            <li role="listitem">
              <a href="#linkedin" className="footer__link">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
