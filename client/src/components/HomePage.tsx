import React from "react";
import { RecentBar } from "./RecentBar";
import { WowheadGuide } from "./WowheadGuides";
import "../styling/HomePageStyle.scss";

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
      <RecentBar blueArray={props.blues} />

      <WowheadGuide guides={props.guides} />
    </div>
  );
};
