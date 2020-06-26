import React from "react";
import "../styling/CreateTournament.scss";
import { Button } from "semantic-ui-react";

export const CreateTournament = () => {
  return (
    <section className="tournament">
      <h1 className="tournament__header">Create Tournament</h1>
      <section className="tournament__types">
        <div className="tournament__card">
          <h3 className="tournament__card__header">Tournament based</h3>
        </div>
        <div className="tournament__card">
          <h3 className="tournament__card__header">Tier based</h3>
          <ul>
            <li>
              Rate Transmogs using a tier based system. Place users in tiers
              ranked from S to D
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
