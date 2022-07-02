import React from "react";
import { TextDividerVerticalH4 } from "../shared/text-divider/text-divider.component";
import Card, { SocialCard } from "./components/card/card.component";

import Hero from "./components/hero/hero.component";

const Homescreen = () => {
  const title = "Schnell Überblick";
  const subtext = "Besuche die neusten und interessantesten Links";

  const homepageCardLink = "https://a-sites.de";
  const homepageCardTitle = "Webdesig, SEO und Social Media";
  const homepageCardSubTitle = "Agentur für Onlinepräsenz";
  const homepageCardText =
    "Zusammen mit meinem Team entickle ich Ihere Onlinepräsenzu und Optimieren diese, um Sie von Ihrer Konkurenz abzugrenzen. \n Dies verschafft Ihnen mehr Kunden";
  const homepageCardLinkText = "Schau vorbei";

  return (
    <div className="container-fluid p-0 m-0">
      <Hero />
      <TextDividerVerticalH4 title={title} subtext={subtext} />
      <Card
        cardLink={homepageCardLink}
        cardTitle={homepageCardTitle}
        cardSubTitle={homepageCardSubTitle}
        cardText={homepageCardText}
        cardLinkText={homepageCardLinkText}
      />
      <SocialCard
        socialMedia={"Twitter"}
        cardText={"Schau doch gerne auf Twitter vorbei @aryus_max"}
      />
    </div>
  );
};

export default Homescreen;
