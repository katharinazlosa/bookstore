// src/components/LinkButton.tsx
import React from "react";
import { Link } from "react-router-dom";

type LinkBtnProps = {
  to: string;
  label: string;
};

const LinkButton = ({ to, label }: LinkBtnProps) => {
  return (
    <Link to={to} className="custom-button">
      {label}
    </Link>
  );
};

export default LinkButton;
