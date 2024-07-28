import React from "react";
import Header from "./header";
import Footer from "./footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>About Our Bookshop</h1>
        <p>
          Welcome to our Bookshop! We are passionate about books and dedicated
          to providing a wide range of titles to cater to all readers. Whether
          you're looking for the latest bestsellers, timeless classics, or
          hidden gems, our collection has something for everyone.
        </p>
        <p>
          Our mission is to foster a love for reading and to create a community
          where book enthusiasts can come together. We host regular events,
          author signings, and book clubs to engage with our readers and promote
          literary discussions.
        </p>
        <p>
          Thank you for choosing our Bookshop as your destination for all things
          books. We look forward to serving you and helping you discover your
          next great read!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
