import React, { useState } from "react";
import Review from "./review";
import Button from "./button";

const reviews = [
  {
    title: "Book Title 1",
    author: "Author Name 1",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    title: "Book Title 2",
    author: "Author Name 2",
    rating: 3,
    content:
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
  {
    title: "Book Title 3",
    author: "Author Name 3",
    rating: 5,
    content:
      "Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.",
  },
  {
    title: "Book Title 4",
    author: "Author Name 4",
    rating: 2,
    content:
      "Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.",
  },
  {
    title: "Book Title 5",
    author: "Author Name 5",
    rating: 5,
    content:
      "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
  },
];

const ReviewsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };
  return (
    <div className="reviews-slider-container">
      <h1>Book Reviews</h1>
      <div className="reviews-slider">
        <div
          className="reviews-slider-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <Review
              key={index}
              title={review.title}
              author={review.author}
              rating={review.rating}
              content={review.content}
            />
          ))}
        </div>
      </div>
      <div className="nav-buttons">
        <Button position="sliderposition" onClick={prevSlide} text="❮" />
        <Button position="sliderposition" onClick={nextSlide} text="❯" />
      </div>
    </div>
  );
};

export default ReviewsList;
