import React from "react";
import testImage from "../../images/Test-background.jpg";
import create from "../../images/CreateTournament.jpg";
import "../../styling/HomePageStyle.scss";
import { HomeCard } from "./HomeCard";
import { StyledLayout } from "../../CommonComponents/StyledLayout";

export const HomePage = () => {
  return (
    // container used for all home page components
    <section className="home-container">
      <StyledLayout styleClass="home-side">
        <HomeCard
          content={[
            { text: "Connect with your community.", icon: "world icon small" },
            {
              text: "Judge anyones Transmog no matter what faction.",
              icon: "gavel icon small",
            },
            {
              text:
                "Crown a winner or create a tier list of Transmogs you like.",
              icon: "chess king icon small",
            },
          ]}
          header={"Create Tournament"}
          button={"Create Tournament"}
          link={"/create_tournament"}
          image={create}
        />
      </StyledLayout>

      <StyledLayout styleClass="home-side">
        <HomeCard
          content={[
            {
              text: "Join your favorite content creators tournament.",
              icon: "user icon small",
            },
            {
              text:
                "Upload Transmog screenshots from your favorite spot in Azeroth or your armory.",
              icon: "upload icon small",
            },
            {
              text:
                "Upload Transmog screenshots from your favorite spot in Azeroth or your armory.",
              icon: "upload icon small",
            },
          ]}
          header={"Join Existing Tournament"}
          button={"Join Tournament"}
          link={"/join_tournament"}
          image={testImage}
        />
      </StyledLayout>
    </section>
  );
};
