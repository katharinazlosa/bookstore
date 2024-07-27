import React, { useState } from "react";
import SearchInput from "./searchInput";
import SocialMediaIcons from "./socialMediaIcons";
import bannerimg from "./../assets/img/banner-img.jpg";
import Button from "./button";
import Modal from "./modal";

const socialMediaLinks = [
  { platform: "facebook", url: "https://www.facebook.com" },
  { platform: "instagram", url: "https://www.instagram.com" },
  { platform: "linkedin", url: "https://www.linkedin.com" },
];

const Banner = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearchButtonClick = () => {
    setShowSearchModal(true);
  };

  const handleSearch = (query: string) => {
    alert(`Searching for: ${query}`);
    setShowSearchModal(false); // Optionally hide the search form after search
  };

  const handleCloseModal = () => {
    setShowSearchModal(false);
  };
  return (
    <>
      <div className="banner-container">
        <div className="banner-container--left">
          <h1>
            A book can change your <br></br>life.
          </h1>
          <p>The most searched book site on google.</p>
          <SearchInput />
          <Modal
            isOpen={showSearchModal}
            onRequestClose={handleCloseModal}
            contentLabel="Search Modal"
          >
            {/* <Button onClick={handleCloseModal} position="closebtn" text="X" /> */}
            {/* <SearchInput onSearch={handleSearch} /> */}
          </Modal>

          <p>Follow us -</p>
          <div className="banner-container--left__icons">
            {socialMediaLinks.map(({ platform, url }) => (
              <SocialMediaIcons key={platform} platform={platform} url={url} />
            ))}
          </div>
        </div>
        <div className="banner-container--right">
          <img src={bannerimg}></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
