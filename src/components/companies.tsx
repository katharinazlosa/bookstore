import React from "react";
import google from "./../assets/icons/google.png";
import microsoft from "./../assets/icons/microsoft.png";
import disney from "./../assets/icons/disney.png";
import amazon from "./../assets/icons/amazon.png";

const Companies = () => {
  return (
    <>
      <div className="companies-container">
        <h2>Trusted by many companies around the world</h2>
        <div className="img-container">
          <img src={google}></img>
          <img src={amazon}></img>
          <img src={disney}></img>
          <img src={microsoft}></img>
        </div>
      </div>
    </>
  );
};

export default Companies;
