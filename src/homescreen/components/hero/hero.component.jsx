import React from "react";
import "./hero.component.css";

import Button from "../../../shared/button/button.component";

import Avatar from "../../../shared/avatar/avatar.component";
import image from "../../../../src/assets/personal-image.png";
const Hero = () => {
  return (
    <>
      <div id="hero" className="pt-3 pb-5 container-fluid">
        <div className="row">
          <div className="col-8 align-self-start ps-4">
            <Avatar image={image} text="Max Aryus" />
          </div>
          <div className="col-4 align-self-center">
            <Button
              text="Zum Shop"
              hero={true}
              url="https://max-aryus.a-sites.de"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
