import React, { useContext } from "react";
import { Calendar } from "primereact/calendar";
const CalendarControl = ({
  field_id,
  field_label,
  field_value,
  handleChange,
}) => {
  // const { handleChange } = useContext(FormContext)

  return (
    <div>
      <h5>{field_label}</h5>
      <Calendar
        id={field_id}
        value={field_value}
        onChange={(event) => handleChange(field_id, event)}
        dateFormat="dd/M/yy"
        showIcon
      />
    </div>
  );
};

export default CalendarControl;
