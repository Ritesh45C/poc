import React, { useContext, useState, useEffect } from "react";
import { RadioButton } from "primereact/radiobutton";

const Radio = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
  handleChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(field_value);

  useEffect(() => {
    handleChange(field_id, { target: { value: selectedValue } });
  }, [selectedValue]);
  return (
    <div>
      <h5>{field_label} </h5>
      {field_options.map((opt) => {
        return (
          <div className="p-field-radiobutton" key={opt.value}>
            <RadioButton
              inputId={opt.value}
              name={field_id + "_" + opt.value}
              value={opt.value}
              onChange={(e) => setSelectedValue(e.value)}
              checked={opt.value == selectedValue}
            />
            <label htmlFor={field_id + "_" + opt.value}>{opt.name} </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
