import React from "react";
import Button from "./button";

type ShopItemProps = {
  id: string;
  title: string;
  authors?: string[];
  thumbnail?: string;
  price?: number;
  onAddToCart: (id: string) => void;
};

const ShopItem: React.FC<ShopItemProps> = ({
  id,
  title,
  authors = ["Unknown Author"],
  thumbnail,
  price,
  onAddToCart,
}) => {
  const priceDisplay = price ? `$${price.toFixed(2)}` : "Price Unavailable";

  return (
    <div className="book-item">
      <img
        src={thumbnail || "/default-thumbnail.jpg"}
        alt={title || "Book thumbnail"}
        className="book-thumbnail"
      />
      <h3>{title}</h3>
      <p>{authors.join(", ")}</p>
      <p className="book-price">{priceDisplay}</p>{" "}
      <Button
        className="cart"
        text="Add to Cart"
        onClick={() => {
          const book = {
            id,
            title,
            authors,
            thumbnail,
            price,
          };
          onAddToCart(book);
        }}
      />
    </div>
  );
};

export default ShopItem;
