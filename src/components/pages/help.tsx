import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

const Help = () => {
  return (
    <>
      <Header />
      <div className="help">
        <h1 className="help__title">Help & Support</h1>

        <section className="help__section" aria-labelledby="faq-section">
          <h2 id="faq-section" className="help__section-title">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="faq">
            <div
              className="faq__item"
              role="region"
              aria-labelledby="faq-item-1"
            >
              <h3 id="faq-item-1" className="faq__item-title">
                How can I create an account?
              </h3>
              <p className="faq__item-description">
                To create an account, click on the "Sign Up" button at the top
                right corner of the homepage. Fill in your details and submit
                the form to register.
              </p>
            </div>
            <div
              className="faq__item"
              role="region"
              aria-labelledby="faq-item-2"
            >
              <h3 id="faq-item-2" className="faq__item-title">
                How do I search for books?
              </h3>
              <p className="faq__item-description">
                Use the search bar at the top of the page to enter keywords,
                titles, or author names. Press "Enter" or click the search icon
                to see the results.
              </p>
            </div>
            <div
              className="faq__item"
              role="region"
              aria-labelledby="faq-item-3"
            >
              <h3 id="faq-item-3" className="faq__item-title">
                How can I purchase a book?
              </h3>
              <p className="faq__item-description">
                To purchase a book, browse our collection, select the book you
                wish to buy, and click "Add to Cart." Proceed to the checkout
                page to complete your purchase.
              </p>
            </div>
            <div
              className="faq__item"
              role="region"
              aria-labelledby="faq-item-4"
            >
              <h3 id="faq-item-4" className="faq__item-title">
                What payment methods do you accept?
              </h3>
              <p className="faq__item-description">
                We accept various payment methods including credit/debit cards,
                PayPal, and other popular online payment systems.
              </p>
            </div>
          </div>
        </section>

        <section className="help__section" aria-labelledby="contact-section">
          <h2 id="contact-section" className="help__section-title">
            Contact Us
          </h2>
          <p className="help__contact-description">
            If you have any questions or need further assistance, please feel
            free to contact us:
          </p>
          <ul className="help__contact-list">
            <li>
              Email:{" "}
              <a
                href="mailto:support@bookshop.com"
                className="help__contact-link"
              >
                support@bookshop.com
              </a>
            </li>
            <li>
              Phone: <span className="help__contact-text">(123) 456-7890</span>
            </li>
            <li>
              Address:{" "}
              <span className="help__contact-text">
                123 Bookshop Lane, Reading City, 45678
              </span>
            </li>
          </ul>
        </section>

        <section className="help__section" aria-labelledby="resources-section">
          <h2 id="resources-section" className="help__section-title">
            Helpful Resources
          </h2>
          <p className="help__resources-description">
            Here are some resources that might be helpful:
          </p>
          <ul className="help__resources-list">
            <li>
              <Link to="/terms" className="help__resources-link">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="help__resources-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="help__resources-link">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link to="/returns" className="help__resources-link">
                Returns and Refunds
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Help;
