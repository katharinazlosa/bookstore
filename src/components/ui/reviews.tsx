import React from "react";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviews = [
    {
      name: "Emma Wilson",
      rating: 5,
      comment: "A fantastic collection! Every book is a gem.",
    },
    {
      name: "Michael Carter",
      rating: 4,
      comment: "Great selection, but I wish there were more historical books.",
    },
    {
      name: "Sophia Martinez",
      rating: 5,
      comment: "Fast delivery and excellent customer service!",
    },
  ];

  return (
    <section className="reviews">
      <h2>What Our Readers Say</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="review-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="reviewer">
              <span className="name">{review.name}</span>
            </div>
            <div className="stars">{"★".repeat(review.rating)}</div>
            <p>{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
