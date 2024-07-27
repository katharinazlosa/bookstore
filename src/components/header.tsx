import React, { useState } from "react";
import Button from "./button";
import Login from "./login";
import Modal from "./modal";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
  };

  const handleLogin = (username: string, password: string) => {
    alert(`Logged in with Username: ${username}, Password: ${password}`);
    setShowLogin(false);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
  };
  return (
    <>
      <div className="header-container">
        <div className="header-container--left">
          <a href="/">Bookstore</a>
          <div className="link-container">
            <a href="About">About</a>
            <a href="Book">Book</a>
            <a href="Popular">Popular</a>
            <a href="Help">Help</a>
          </div>
        </div>

        <div className="header-container--right">
          <Button
            position="headerposition"
            text="Log in"
            onClick={handleLoginButtonClick}
          />
          <br></br>
          <Button
            position="headerposition"
            text="Shop books"
            onClick={() => (window.location.href = "/bookshop")}
          />
          <Modal isOpen={showLogin} onClose={handleCloseModal}>
            <Login onLogin={handleLogin} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header;
