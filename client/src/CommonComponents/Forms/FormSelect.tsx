import React from "react";
import { Layout } from "../Layout";
import "../../styling/Form.scss";

interface Props {
  label: string;
  change: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelect: React.FunctionComponent<Props> = (props) => {
  return (
    <React.Fragment>
      <Layout padding={"y.5"}>
        <label>{props.label}:</label>
      </Layout>

      <select
        className="form__select"
        name="type"
        onChange={props.change}
        defaultValue="none"
      >
        <option value="none" disabled hidden>
          Select an Option
        </option>
        {props.children}
      </select>
    </React.Fragment>
  );
};
