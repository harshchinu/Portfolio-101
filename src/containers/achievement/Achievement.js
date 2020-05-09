import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import {socialMediaLinks } from "../../portfolio";
import Button from "../../components/button/Button";

export default function Achievement() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{achievementSection.title}</h1>
          <p className="subTitle achievement-subtitle">{achievementSection.subtitle}</p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achivementsCards.map(card => {
            return (
              <AchivementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  techstack:card.techstack,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
        <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
       </div>
    </div>
    </Fade>
  );
}
