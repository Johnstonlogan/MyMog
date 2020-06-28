import React from "react";
import { Button } from "semantic-ui-react";
import "../../styling/Form.scss";

interface Props {
  submit: (e: React.MouseEvent) => void;
  button: string;
}

export const FormButton = (props: Props) => {
  const { submit, button } = props;
  return (
    <Button className="form__button" primary onClick={submit}>
      {button}
    </Button>
  );
};
