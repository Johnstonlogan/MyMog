import React from "react";
import "../../styling/CreateTournament.scss";
import { TournamentCard } from "./TournamentCard";
export const CreateTournament = () => {
  return (
    <section className="tournament">
      <h1 className="tournament__header">Create Tournament</h1>
      <section className="tournament__types">
        <TournamentCard
          header="Tier Based"
          button="Create"
          listItem={[
            `Rate Transmogs using a tier based system. Place users in tiers ranked
          from S to D`,
            ``,
          ]}
        />
        <TournamentCard
          header="Competition Based"
          button="Create"
          listItem={[
            `Pit your friends against each other in a head to head Transmog battle. `,
          ]}
        />
      </section>
    </section>
  );
};
