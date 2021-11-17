import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
// import '../../index.css';
import { Button } from "primereact/button";

import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
// import './DropdownDemo.css';

import DropdownComponent from "./DropdownComponent";

function Main() {
  const [inputItems, setiInputItems] = useState([
    {
      title1: "Select Country",
      title2: "Select City",
      title3: "Select Language",
      title4: "Population",
    },
  ]);

  const handleAddClick = () => {
    setiInputItems([
      ...inputItems,
      {
        title1: "Select Country",
        title2: "Select City",
        title3: "Select Language",
        title4: "Population",
      },
    ]);
  };
  return (
    <div className="dropdown-demo">
      <div>
        {inputItems.map((item, i) => {
          return (
            <div>
              <div className="card">
                <DropdownComponent data={item} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="addButton">
        <Button
          onClick={handleAddClick}
          icon="pi pi-plus"
          className="p-button-rounded "
        />
      </div>
    </div>
  );
}

export default Main;
