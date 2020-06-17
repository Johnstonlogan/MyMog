import React from "react";
import { RecentBar } from "./RecentBar";
import { WowheadGuide } from "./WowheadGuides";
import "../styling/HomePageStyle.scss";
import { HomeCard } from "../components/HomeCard";
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
    <section className="home-container">
      <div className="home-left">
        <HomeCard
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla
        gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros
        bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in
        mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate
        vehicula. In hac habitasse platea
        dictumst.`}
          header={"Create Tournament"}
          button={"Create Tournament"}
        />
        {/* <RecentBar blueArray={props.blues} /> */}
        {/* <TransmogDisplay /> */}
      </div>

      <div className="home-right">
        <HomeCard
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla
        gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros
        bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in
        mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate
        vehicula. In hac habitasse platea
        dictumst.`}
          header={"Join existing Tournament"}
          button={"Join Tournament"}
        />
        {/* <WowheadGuide guides={props.guides} /> */}
      </div>
    </section>
  );
};
