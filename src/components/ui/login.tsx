import React, { useState } from "react";
import Button from "./button";

type LoginProps = {
  onLogin: (username: string, password: string) => void;
};

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login">
      <form
        onSubmit={handleSubmit}
        className="login__form"
        aria-labelledby="login-title"
      >
        <h2 id="login-title" className="login__title">
          Log in
        </h2>
        <div className="login__group">
          <label htmlFor="username" className="login__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="login__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-describedby="username-desc"
          />
          <small id="username-desc" className="login__hint">
            Enter your username
          </small>
        </div>
        <div className="login__group">
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-describedby="password-desc"
          />
          <small id="password-desc" className="login__hint">
            Enter your password
          </small>
        </div>
        <Button
          text="Log in"
          className="header__right-button"
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default Login;
