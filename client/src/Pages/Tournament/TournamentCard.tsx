import React from "react";
import { Button } from "../../CommonComponents/Button";
import { Layout } from "../../CommonComponents/Layout";

interface Props {
  header: string;
  listItem: Array<String>;
  button: string;
}

export const TournamentCard = (props: Props) => {
  return (
    <div className="tournament__card">
      <h3 className="tournament__card__header">{props.header}</h3>
      <ul className="tournament__card__list">
        {props.listItem.map((item, index) => {
          return (
            <li className="tournament__card__list-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <Layout width="full" flex={true} justify="center" padding={0.5}>
        <Button primary={true} button={props.button} />
      </Layout>
    </div>
  );
};
