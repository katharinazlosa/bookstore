import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about__container">
          <h1 className="about__title" aria-label="About our bookstore">
            About Our Bookstore
          </h1>
          <p className="about__subtitle">
            Discover a world of stories, knowledge, and inspiration.
          </p>

          <div className="about__content">
            <div className="about__section">
              <h2 className="about__section-title">Our Story</h2>
              <p className="about__text">
                Founded in 2024, our bookstore is dedicated to bringing readers
                closer to their favorite stories. Whether you love fiction,
                non-fiction, or academic books, we have something for everyone.
              </p>
            </div>

            <div className="about__section">
              <h2 className="about__section-title">Why Choose Us?</h2>
              <ul className="about__list">
                <li className="about__list-item">📚 Wide selection of books</li>
                <li className="about__list-item">
                  🚀 Fast and reliable delivery
                </li>
                <li className="about__list-item">
                  💬 Engaging community of readers
                </li>
                <li className="about__list-item">
                  🌍 Support for indie authors
                </li>
              </ul>
            </div>

            <div className="about__section">
              <h2 className="about__section-title">Connect With Us</h2>
              <p className="about__text">
                Follow us on social media to stay updated on new arrivals and
                special offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
