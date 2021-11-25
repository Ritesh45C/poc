import React from "react";
// import Checkbox from "./Inputs/Checkbox";
import Input from "./Inputs/InputText";
import Select from "./Inputs/Select";
import Radio from "./Inputs/Radio";
import CalendarControl from "./Inputs/Calender";
const InputTypes = ({
  field: {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_options,
    field_MaxLength,
    field_Props,
  },
  handleChange,
}) => {
  console.log(field_type);
  switch (field_type.toString().toLowerCase()) {
    case "textbox":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_MaxLength={field_MaxLength}
          field_Props={field_Props}
          handleChange={handleChange}
        />
      );
    case "dropdown":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
          handleChange={handleChange}
        />
      );
    case "datepicker":
      return (
        <CalendarControl
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          handleChange={handleChange}
        />
      );

    case "radio":
      return (
        <Radio
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
          handleChange={handleChange}
        />
      );
    // case 'checkbox':
    //     return (<Checkbox
    //         field_id={field_id}
    //         field_label={field_label}
    //         field_value={field_value}
    //     />)

    default:
      return null;
  }
};

export default InputTypes;
