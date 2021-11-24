import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
// import '../../index.css';
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";

import { Card } from "primereact/card";
import { MultiSelect } from "primereact/multiselect";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import Data from "./data.json";

function DropdownComponent(props) {
  const [inputList, setInputList] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      displayName: "",
      displayEmployeeCode: "",
      designation: "",
      gender: "",
      cities: "",
    },
  ]);

  const [leaveInputs, setLeaveInputs] = useState([
    {
      NoOfDays: "",
      LeaveLeft: "",
    },
  ]);
  const [date, setDate] = useState(null);

  const [formType, setFormType] = useState([{ name: "Employee", code: "EM" }]);

  const [gender, setGender] = useState("");

  const [menu, setMenu] = useState([
    { label: "Employee", value: "Employee" },
    { label: "Leave", value: "Leave" },
  ]);
  const formItems = [
    { name: "Employee", code: "EM" },
    { name: "Leave", code: "LV" },
  ];
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  // const handleCityChange = (obj) => {
  //   console.log(obj);
  //   setCity(obj.value.label);
  // };

  // handle Employee input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log(e);
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle Leave input change
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
  console.log(inputList, "this is inputlist");
  return (
    <Card style={{ width: "1100", margin: "20px 0" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div className="dropdown">
          <h3>
            <a href="https://google.com">Form Details</a>
          </h3>
          <Dropdown
            value={formType}
            options={formItems}
            onChange={onFormChange}
            optionLabel="name"
            placeholder="Select Form"
          />
          {Data.map((x, i) => {
            return (
              <div className="box">
                <div className="inputBox">
                  {x.FieldType === "text" && (
                    <div>
                      {" "}
                      <h5>{x.fieldName} </h5>
                      <InputText
                        name={x.fieldName}
                        placeholder={x.fieldName}
                        // value={x.f}
                        onChange={(e) => handleInputChange(e, i)}
                      />{" "}
                    </div>
                  )}
                  {x.FieldType === "number" && (
                    <div>
                      {" "}
                      <h5>{x.fieldName} </h5>
                      <InputNumber
                        name={x.fieldName}
                        placeholder={x.fieldName}
                        // value={x.f}
                        onChange={(e) => handleInputChange(e, i)}
                      />{" "}
                    </div>
                  )}
                  {x.FieldType === "date" && (
                    <div>
                      {" "}
                      <h5>{x.fieldName} </h5>
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                      ></Calendar>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
          <div style={{ marginTop: 20 }}>{JSON.stringify(leaveInputs)}</div> */}
        </div>
      </div>
    </Card>
  );
}

export default DropdownComponent;
