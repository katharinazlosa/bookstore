import React from "react";

import google from "../../assets/icons/google.png";
import microsoft from "../../assets/icons/microsoft.png";
import disney from "../../assets/icons/disney.png";
import amazon from "../../assets/icons/amazon.png";

const Companies = () => {
  return (
    <section className="companies" aria-labelledby="companies-title">
      <div className="companies__container">
        <h2 className="companies__title" id="companies-title">
          Trusted by many companies around the world
        </h2>
        <div className="companies__logos">
          <figure className="companies__logo">
            <img src={google} alt="Google logo" />
          </figure>
          <figure className="companies__logo">
            <img src={amazon} alt="Amazon logo" />
          </figure>
          <figure className="companies__logo">
            <img src={disney} alt="Disney logo" />
          </figure>
          <figure className="companies__logo">
            <img src={microsoft} alt="Microsoft logo" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Companies;
