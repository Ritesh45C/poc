import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
// import '../../index.css';
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";

import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
// import './DropdownDemo.css';

function DropdownComponent(props) {
  const [inputList, setInputList] = useState([
    { firstName: "", lastName: "", designation: "" },
  ]);
  const [leaveInputs, setLeaveInputs] = useState([
    {
      NoOfDays: "",
      LeaveLeft: "",
    },
  ]);
  const [formType, setFormType] = useState([{ name: "Employee", code: "EM" }]);

  const [city, setCity] = useState("");

  const [menu, setMenu] = useState([
    { label: "Employee", value: "Employee" },
    { label: "Leave", value: "Leave" },
  ]);
  const cities = [
    { name: "Employee", code: "EM" },
    { name: "Leave", code: "LV" },
  ];

  // const handleCityChange = (obj) => {
  //   console.log(obj);
  //   setCity(obj.value.label);
  // };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleLeaveInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...leaveInputs];
    list[index][name] = value;
    setLeaveInputs(list);
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
  const onFormChange = (e) => {
    setFormType(e.value);
  };

  return (
    <Card style={{ width: "800px", margin: "20px 0" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div className="dropdown">
          <h3>
            <a href="https://cluemediator.com">Form Details</a>
          </h3>
          <Dropdown
            value={formType}
            options={cities}
            onChange={onFormChange}
            optionLabel="name"
            placeholder="Select Form"
          />

          {formType.name === "Employee"
            ? inputList.map((x, i) => {
                return (
                  <div className="box">
                    <div className="inputBox">
                      <h5>First Name </h5>
                      <InputText
                        name="firstName"
                        placeholder="First Name"
                        value={x.firstName}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>

                    <div className="inputBox">
                      <h5>Last Name </h5>

                      <InputText
                        className="ml10"
                        name="lastName"
                        placeholder="Last Name"
                        value={x.lastName}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>

                    <div className="inputBox">
                      {" "}
                      <h5>Designation</h5>
                      <InputText
                        className="ml10"
                        name="designation"
                        placeholder="Designation"
                        value={x.designation}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                    {/* 
                  <div className="btn-box">
                    {inputList.length !== 1 && (
                      <button
                        className="mr10"
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </button>
                    )}
                    {inputList.length - 1 === i && (
                      <button onClick={handleAddClick}>Add</button>
                    )}
                  </div> */}
                    {/* {city} */}
                  </div>
                );
              })
            : leaveInputs.map((x, i) => {
                return (
                  <div className="box">
                    <div className="inputBox">
                      {" "}
                      <h5>Number of Days </h5>
                      <InputText
                        name="NoOfDays"
                        placeholder="Number Of Days"
                        value={x.NoOfDays}
                        onChange={(e) => handleLeaveInput(e, i)}
                      />
                    </div>

                    <div className="inputBox">
                      {" "}
                      <h5>Leave Left</h5>
                      <InputText
                        className="ml10"
                        name="LeaveLeft"
                        placeholder="Leave Left"
                        value={x.LeaveLeft}
                        onChange={(e) => handleLeaveInput(e, i)}
                      />
                    </div>
                    {/* 
                  <div className="btn-box">
                    {inputList.length !== 1 && (
                      <button
                        className="mr10"
                        onClick={() => handleRemoveClick(i)}
                      >
                        Remove
                      </button>
                    )}
                    {inputList.length - 1 === i && (
                      <button onClick={handleAddClick}>Add</button>
                    )}
                  </div>
                  {city} */}
                  </div>
                );
              })}
          <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
          <div style={{ marginTop: 20 }}>{JSON.stringify(leaveInputs)}</div>
        </div>
      </div>
    </Card>
  );
}

export default DropdownComponent;
