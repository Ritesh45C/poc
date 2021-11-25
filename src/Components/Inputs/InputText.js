import React, { useContext } from "react";

import { InputText } from "primereact/inputtext";

const Input = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_MaxLength,
  handleChange,
}) => {
  // const { handleChange } = useContext(FormContext)
  return (
    <div>
      <h5>{field_label} </h5>

      <InputText
        id="inputtext"
        value={field_value}
        required="true"
        maxLength={field_MaxLength}
        placeholder={field_placeholder ? field_placeholder : ""}
        onChange={(event) => handleChange(field_label, event)}
      />
    </div>
  );
};

export default Input;
