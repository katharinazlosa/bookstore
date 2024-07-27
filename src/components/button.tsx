import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  position: "sliderposition" | "bannerposition" | "headerposition" | "closebtn";
};

const Button = ({ position, text = "", onClick }: ButtonProps) => {
  return (
    <>
      <button className={`btn btn--${position}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
