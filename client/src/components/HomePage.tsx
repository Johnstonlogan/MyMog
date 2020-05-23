import React from "react";
import { RecentBar } from "./RecentBar";
import { WowheadGuide } from "./WowheadGuides";
import "../styling/HomePageStyle.scss";
import { TransmogDisplay } from "./TransmogDisplay";

interface Props {
  blues: [{ title: string; id: number }];
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

export const HomePage = (props: Props) => {
  return (
    // container used for all home page components
    <div className="home-container">
      <div className="home-left">
        <RecentBar blueArray={props.blues} />
        <TransmogDisplay />
      </div>

      <div className="home-right">
        <WowheadGuide guides={props.guides} />
      </div>
    </div>
  );
};
