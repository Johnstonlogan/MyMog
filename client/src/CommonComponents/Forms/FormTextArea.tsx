import React from "react";
import { TextArea, TextAreaProps } from "semantic-ui-react";
import "../../styling/Form.scss";
interface Props {
  change: (
    e: React.FormEvent<HTMLTextAreaElement>,
    data: TextAreaProps
  ) => void;
  placeholder: string;
  rows: number;
  name: string;
}

export const FormTextArea = (props: Props) => {
  return (
    <div>
      <TextArea
        className="form__textarea"
        onChange={props.change}
        name={props.name}
        placeholder={props.placeholder}
        rows={props.rows}
      />
    </div>
  );
};
