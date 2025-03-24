import React from "react";
import Companies from "../layout/companies";
import Header from "../layout/header";
import Banner from "../layout/banner";
import Footer from "../layout/footer";
import Slider from "../ui/slider";
import Hero from "../layout/hero";
import Reviews from "../ui/reviews";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <Banner />
        <Reviews />
        <Companies />
        <Hero />
        <Slider />
        <Footer />
      </div>
    </>
  );
};

export default Home;
