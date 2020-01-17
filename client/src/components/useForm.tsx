import React, { useState} from "react";




export const useForm = (callback: () => any) => {
  const [values, setValues] = useState<Object>();
  
  // handle the mouse even and calls the given callback (createUser)
  const handleSubmit = (e: React.MouseEvent) => {
    if (e) e.preventDefault();
    callback();
    
  };
 
  // handle change in input data
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