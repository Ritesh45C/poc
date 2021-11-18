import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import DropdownComponent from "./DropdownComponent";
// import '../../index.css';

function Main() {
  const [inputList, setInputList] = useState([
    { firstName: "", lastName: "", designation: "" },
  ]);
  const [leaveInputs, setLeaveInputs] = useState([
      {
        NoOfDays: "",
        LeaveLeft: "",
      },
    ]),
    [option, setOption] = useState([""]);

  const [menu, setMenu] = useState([
    { label: "Employee", value: "Employee" },
    { label: "Leave", value: "Leave" },
  ]);

  const handleAdd = () => {
    setOption([...option, ""]);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { firstName: "", lastName: "", designation: "" },
    ]);
  };

  return (
    <div className="main">
      <div className="addButton">
        <Button
          icon="pi pi-plus"
          className="p-button-rounded "
          onClick={handleAdd}
        />
      </div>

      {option.map((a) => (
        <DropdownComponent />
      ))}
    </div>
  );
}

export default Main;
