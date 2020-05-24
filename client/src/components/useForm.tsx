import React, { useState } from "react";
import { TextAreaProps } from "semantic-ui-react";


export const useForm = (callback: () => any) => {
  const [values, setValues] = useState<Object>();

  // handle the mouse even and calls the given callback (createUser)
  const handleSubmit = (e: React.MouseEvent) => {
    if (e) e.preventDefault();
    callback();
  };

  // handle change in input data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  // handle change in select
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  //handle change in textarea
  const handleTextArea = (e: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) =>{
    setValues((values) => ({ ...values, [data.name] : data.value }));
  };

  return {
    handleChange,
    handleSubmit,
    handleTextArea,
    handleSelect,
    values,
  };
};
