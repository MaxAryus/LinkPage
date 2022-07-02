import React from "react";
import "./button.component.css";

const Button = ({ text = "Zur Seite", rounded = true, url, hero = false }) => {
  let className = "btn ";

  if (hero) {
    className += " btn-orange ";
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button className={className} onClick={() => openInNewTab(url)}>
      {text}
    </button>
  );
};

export default Button;
