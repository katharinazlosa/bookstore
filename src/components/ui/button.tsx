import React from "react";
import { observer } from "mobx-react-lite";
import cartStore, { Book } from "../../stores/cartStore";

type ButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  ariaLabel?: string;
  book?: Book;
  isClearCart?: boolean;
};

const Button: React.FC<ButtonProps> = observer(
  ({ className = "", text, onClick, ariaLabel, book, isClearCart }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isClearCart) {
        cartStore.clearCart();
      } else if (book) {
        cartStore.addToCart(book);
      }

      if (onClick) {
        onClick(event);
      }
    };

    return (
      <button
        className={`btn btn--${className}`}
        onClick={handleClick}
        aria-label={ariaLabel}
        disabled={isClearCart && !cartStore.cart.length}
      >
        {text}
      </button>
    );
  }
);

export default Button;
