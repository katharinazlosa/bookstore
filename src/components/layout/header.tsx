import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/button";
import Login from "../ui/login";
import Modal from "../ui/modal";
import cartStore from "../../stores/cartStore";

const Header = observer(() => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLayout = location.pathname === "/";

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
      <div
        className={`header ${isLayout ? "header--layout" : "header--other"}`}
        aria-label="Main header navigation"
      >
        <div className="header__left">
          <Link to="/" className="header__logo" aria-label="Go to homepage">
            Bookstore
          </Link>
          <nav className="header__nav" aria-label="Primary navigation">
            <Link to="/about" className="header__nav-link">
              About
            </Link>
            <Link to="/popular" className="header__nav-link">
              Popular
            </Link>
            <Link to="/help" className="header__nav-link">
              Help
            </Link>
          </nav>
        </div>

        <div className="header__right ">
          <Button
            className="header__right-button"
            text="Log in"
            onClick={handleLoginButtonClick}
            aria-label="Open login modal"
          />
          <Button
            className="header__right-button"
            text="Shop books"
            onClick={() => navigate("/bookshop")}
            aria-label="Go to bookshop page"
          />
          <Link
            to="/cart"
            className="header__cart"
            aria-label="Go to cart page"
          >
            🛒 Cart ({cartStore.totalItems})
          </Link>
          <Modal isOpen={showLogin} onClose={handleCloseModal}>
            <Login onLogin={handleLogin} />
          </Modal>
        </div>
      </div>
    </>
  );
});

export default Header;
