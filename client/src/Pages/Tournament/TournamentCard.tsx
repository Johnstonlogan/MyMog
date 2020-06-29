import React from "react";
import { Button } from "semantic-ui-react";

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
      <div className="tournament__card__button-group">
        <Button className="tournament__card__button" primary>
          {props.button}
        </Button>
      </div>
    </div>
  );
};
