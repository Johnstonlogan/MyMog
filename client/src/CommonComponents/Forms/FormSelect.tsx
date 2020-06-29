import React from "react";
import "../../styling/Form.scss";

interface Props {
  label: string;
  change: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelect: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="form__select">
      <label>{props.label}:</label>
      <select name="type" onChange={props.change} defaultValue="none">
        <option value="none" disabled hidden>
          Select an Option
        </option>
        {props.children}
      </select>
    </div>
  );
};
