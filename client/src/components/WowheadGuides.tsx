import React from "react";
import Mage from "../images/ClassIcons/mage.png";
import "../styling/WowheadStyle.scss";

interface Props {
  guides: [
    {
      image: string;
      title: string;
      link: string;
      content: string;
      class: string;
    }
  ];
}

export const WowheadGuide = (props: Props) => {
  return (
    <div className="wowhead-container clear">
      {props.guides.map((guide) => {
        return (
          <div className={`box ${guide.class}`}>
            <div className="text" key={guide.class}>
              <p>{guide.class}</p>
              <div>
                <img src={guide.image} />
              </div>
              <p className="guide-content">{guide.content}</p>
              <div className="button-container">
                <a href={guide.link} target="_blank">
                  {" "}
                  <button className="guide-button">View Guide</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
