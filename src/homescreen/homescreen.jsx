import React from "react";
import { TextDividerVerticalH4 } from "../shared/text-divider/text-divider.component";
import Card, { SocialCard } from "./components/card/card.component";

import Hero from "./components/hero/hero.component";

const Homescreen = () => {
  const title = "Schnell Überblick";
  const subtext = "Besuche die neusten Links";

  const homepageCardLink = "https://a-sites.de";
  const homepageCardTitle = "Webdesig, SEO und Social Media";
  const homepageCardSubTitle = "Agentur für Onlinepräsenz";
  const homepageCardText =
    "Zusammen mit meinem Team entickle ich Ihere Onlinepräsenzu und Optimieren diese, um Sie von Ihrer Konkurenz abzugrenzen. \n Dies verschafft Ihnen mehr Kunden";
  const homepageCardLinkText = "Schau vorbei";

  const appStoreCardTitle = "App Store Preview Bilder";
  const appStoreCardText =
    "Du hast eine App entwickelt und möchtet diese veröffentlichen? Dann musst du nur noch Bilder für den App Store erstellen. Um diese optisch von anderen App Store Bilder abzuheben, haben wir 5 Templates für dich erstellt.";
  const appStoreCardLinkText = "Jetzt Starten";
  const appStoreCardLink = "https://maxaryus.gumroad.com/l/eddvp";

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
        bgColor={"#C4DFAA"}
      />
      <SocialCard
        socialMedia={"Twitter"}
        cardText={"Schau doch gerne auf Twitter vorbei @aryus_max"}
        bgColor={"#3AB0FF"}
      />
      <Card
        cardLink={appStoreCardLink}
        cardTitle={appStoreCardTitle}
        cardText={appStoreCardText}
        cardLinkText={appStoreCardLinkText}
        bgColor={"#FF7396"}
      />
      <SocialCard
        socialMedia={"Instagram"}
        cardText={"Schau doch gerne auf Instagram vorbei @max_aryus"}
        bgColor={"#FFC898"}
      />
    </div>
  );
};

export default Homescreen;
