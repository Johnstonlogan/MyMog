import React from "react";
import "../../styling/Form.scss";
interface Props {
  label: string;
  name: string;
  type: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const FormInput = (props: Props) => {
  const { label, name, type, change } = props;
  return (
    <div className="form__input">
      <label>{label}:</label>
      <input name={name} type={type} onChange={(e) => change(e)} />
    </div>
  );
};
