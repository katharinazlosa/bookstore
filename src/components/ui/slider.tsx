import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/quotes.json")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  if (!quotes.length) return <p>Loading...</p>;

  return (
    <div className="quote-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="quote-slider__slide"
        >
          <p className="quote-slider__text">"{quotes[currentIndex].quote}"</p>
          <p className="quote-slider__author">
            - {quotes[currentIndex].author}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
