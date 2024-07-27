import React from "react";

type ShopItemProps = {
  title: string;
  authors: string[];
  thumbnail: string;
  onAddToCart: (id: string) => void;
};

const ShopItem = ({ title, authors, thumbnail }: ShopItemProps) => {
  return (
    <>
      <div className="book-item">
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>{authors.join(", ")}</p>

        <p className="book-price">$10,00</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </>
  );
};

export default ShopItem;
