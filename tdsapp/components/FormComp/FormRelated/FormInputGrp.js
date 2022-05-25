import React from "react";
import FormGrp from "./FormGrp";
import InputComponent from "../InputRelated/InputComponentTwo";
import FormLabel from "./FormLabel";
import { forwardRef } from "react";

const FormInputGrp = forwardRef(({ type }, ref) => {
  return (
    <FormGrp>
      <InputComponent type={type} placeholder={type} ref={ref} />
      <FormLabel type={type} />
    </FormGrp>
  );
});

export default FormInputGrp;
