import React from "react";

type ReviewProps = {
  title: string;
  author: string;
  rating: number;
  content: string;
};

const Review = ({ title, author, rating, content }: ReviewProps) => {
  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="review">
      <div className="review-title">{title}</div>
      <div className="review-author">by {author}</div>
      <div className="rating">{renderStars(rating)}</div>
      <div className="review-content">{content}</div>
    </div>
  );
};

export default Review;
