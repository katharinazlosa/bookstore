import React from "react";
import SocialMediaIcons from "../ui/socialMediaIcons";
import bannerimg from "../../assets/img/banner-img.jpg";

const socialMediaLinks = [
  { platform: "facebook", url: "https://www.facebook.com" },
  { platform: "instagram", url: "https://www.instagram.com" },
  { platform: "linkedin", url: "https://www.linkedin.com" },
];

const Banner = () => {
  return (
    <section className="banner" aria-labelledby="banner-title">
      <div className="banner__left">
        <h1
          className="banner__title"
          id="banner-title"
          aria-label="A book can change your life"
        >
          A book can change your <br /> life.
        </h1>
        <p className="banner__subtitle">
          The most searched book site on Google.
        </p>

        <p className="banner__follow-text">Follow us:</p>
        <div className="banner__icons">
          {socialMediaLinks.map(({ platform, url }) => (
            <SocialMediaIcons
              key={platform}
              platform={platform}
              url={url}
              aria-label={`Follow us on ${platform}`}
            />
          ))}
        </div>
      </div>

      <div className="banner__right">
        <img
          src={bannerimg}
          alt="A cozy bookshelf with various books lined up."
          className="banner__image"
        />
      </div>
    </section>
  );
};

export default Banner;
