import React, { useState} from "react";




export const useForm = (callback: () => any) => {
  const [values, setValues] = useState<Object>();
  
  const handleSubmit = (e: React.MouseEvent) => {
    if (e) e.preventDefault();
    callback();
  };

  const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  }
}