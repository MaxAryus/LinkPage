import React from "react";
import { GitHub, Instagram } from "react-feather";
import { Facebook } from "react-feather";
import { Twitter } from "react-feather";
import { Linkedin } from "react-feather";
import { Youtube } from "react-feather";
import "./card.component.css";

const Card = ({
  cardLink,
  cardLinkText,
  cardTitle,
  cardSubTitle,
  cardText,
}) => {
  return (
    <>
      <div className="container p-0 m-0">
        <div className="card ma-card m-4">
          <div className="card-body">
            <h5 className="card-title"> {cardTitle} </h5>
            <h6 className="card-subtitle mb-2 ">{cardSubTitle}</h6>
            <p className="card-text">{cardText}</p>
            <a href={cardLink} className="card-link">
              {cardLinkText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

const SocialCard = ({
  socialMedia = "Instagram" |
    "YouTube" |
    "Facebook" |
    "Twitter" |
    "LinkedIn" |
    "GitHub",
  cardText,
}) => {
  let icon;
  let url = "https://www.instagram.com/maxaryus/";

  switch (socialMedia) {
    case "Instagram":
      icon = <Instagram />;
      url = "https://www.instagram.com/asites.agency/";
      break;
    case "Facebook":
      icon = <Facebook />;
      url = "https://www.facebook.com/profile.php?id=100072481128596";
      break;
    case "Twitter":
      icon = <Twitter />;
      url = "https://twitter.com/aryus_max";
      break;
    case "LinkedIn":
      icon = <Linkedin />;
      url = "https://www.linkedin.com/in/max-aryus-b612401ab/";
      break;
    case "GitHub":
      icon = <GitHub />;
      url = "https://github.com/MaxAryus";
      break;
    case "YouTube":
      icon = <Youtube />;
      url = "https://youtube.com/";
      break;
    default:
      icon = <Instagram />;
      break;
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="container p-0 m-0">
        <div className="card ma-card m-4">
          <center className="pt-3" button onClick={() => openInNewTab(url)}>
            {icon}
            <p className="p-2">{cardText}</p>
          </center>
        </div>
      </div>
    </>
  );
};

export { SocialCard };
