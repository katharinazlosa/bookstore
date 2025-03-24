import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const icons = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

const SocialMediaIcons = ({ platform, url }) => {
  const IconComponent = icons[platform];

  if (!IconComponent) {
    return null;
  }
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={platform}
        className="icons"
      >
        <IconComponent size={25} color="black" />
      </a>
    </>
  );
};

export default SocialMediaIcons;
