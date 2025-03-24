import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <motion.h1
          id="hero-title"
          className="hero__title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          aria-live="polite" // Ensures screen readers announce this on load
        >
          Discover Your Next Favorite Book
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Explore our vast collection and find stories that inspire.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/bookshop"
            className="btn--cart"
            aria-label="Shop for books now" // Improved accessibility for screen readers
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
