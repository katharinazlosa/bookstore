import React from "react";
import Footer from "./footer";
import Header from "./header";

const Help = () => {
  return (
    <>
      <Header />
      <div className="help-container">
        <h1>Help & Support</h1>

        <section>
          <h2>Frequently Asked Questions (FAQ)</h2>
          <div className="faq">
            <div className="faq-item">
              <h3>How can I create an account?</h3>
              <p>
                To create an account, click on the "Sign Up" button at the top
                right corner of the homepage. Fill in your details and submit
                the form to register.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I search for books?</h3>
              <p>
                Use the search bar at the top of the page to enter keywords,
                titles, or author names. Press "Enter" or click the search icon
                to see the results.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I purchase a book?</h3>
              <p>
                To purchase a book, browse our collection, select the book you
                wish to buy, and click "Add to Cart." Proceed to the checkout
                page to complete your purchase.
              </p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept various payment methods including credit/debit cards,
                PayPal, and other popular online payment systems.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need further assistance, please feel
            free to contact us:
          </p>
          <ul>
            <li>Email: support@bookshop.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Bookshop Lane, Reading City, 45678</li>
          </ul>
        </section>

        <section>
          <h2>Helpful Resources</h2>
          <p>Here are some resources that might be helpful:</p>
          <ul>
            <li>
              <a href="/terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/shipping">Shipping Information</a>
            </li>
            <li>
              <a href="/returns">Returns and Refunds</a>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Help;
