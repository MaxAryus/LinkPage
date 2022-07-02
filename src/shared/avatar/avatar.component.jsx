import React from "react";

import "./avatar.component.css";

const Avatar = ({ image, text, rounded = true }) => {
  return (
    <>
      <img src={image} alt={text} className="rounded" />
    </>
  );
};

export default Avatar;
