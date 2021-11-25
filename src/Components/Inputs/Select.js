import React, { useContext, useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
const Select = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
  handleChange,
}) => {
  return (
    <div>
      <h5>{field_label} </h5>

      <Dropdown
        value={field_value}
        options={field_options}
        optionLabel="name"
        onChange={(event) => handleChange(field_label, event)}
        placeholder={field_placeholder}
      />
    </div>

    // <select
    //   className="form-select"
    //   aria-label="Default select example"
    //   onChange={(event) => handleChange(field_id, event)}
    // >
    //   <option disabled selected></option>
    //   {field_options.length > 0 &&
    //     field_options.map((option, i) => (
    //       <option value={option.id} key={i}>
    //         {option.name}
    //       </option>
    //     ))}
    // </select>
  );
};

export default Select;
