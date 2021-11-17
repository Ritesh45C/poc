import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
// import '../../index.css';
import { InputText } from "primereact/inputtext";

import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
// import './DropdownDemo.css';

import data from "./data.json";

function DropdownComponent(props) {
  const [inputItems, setiInputItems] = useState([
    { title1: "Select Country", title2: "Select Language" },
  ]);
  const [lazyLoading, setLazyLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [cityList, setCityList] = useState(null);

  const [selectedCity2, setSelectedCity2] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);

  let loadLazyTimeout = useRef(null);

  const [country, setCountry] = useState("");
  const [lang, setLang] = useState(null);
  const [langList, setLangList] = useState([]);
  const [population, setPopulation] = useState("");

  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setCountry(obj.value.region);
    setCityList(obj.value.cities);
    setLangList(obj.value.languages);
    setPopulation(obj.value.population);
    console.log(langList);
    setLang(null);
  };

  // handle change event of the language dropdown
  const handleLanguageChange = (obj) => {
    console.log(obj);
    setLang(obj.value.name);
  };

  const handleCityChange = (obj) => {
    console.log(obj);
    setCity(obj.value.label);
  };

  // generate the link when both dropdowns are selected

  // const handleAddClick = () => {
  //   setiInputItems([
  //     ...inputItems,
  //     {
  //       title1: "Select Country",
  //       title2: "Select Language",
  //       title3: "Population",
  //     },
  //   ]);
  // };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h5>{props.data.title1}</h5>

        <Dropdown
          options={data}
          optionLabel={(x) => x.region}
          optionValue={(x) => x}
          placeholder={country}
          value={country}
          // disabled={item.parentSelected=='Value'}
          onChange={(e) => handleCountryChange(e)}
        />
      </div>
      <div>
        <h5>{props.data.title2}</h5>

        <Dropdown
          options={cityList}
          optionLabel={(x) => x.label}
          optionValue={(x) => x}
          placeholder={city}
          value={city}
          // disabled={item.parentSelected=='Value'}
          onChange={(e) => handleCityChange(e)}
        />
      </div>
      <div>
        <h5>{props.data.title3}</h5>
        <Dropdown
          options={langList}
          optionLabel={(x) => x.name}
          optionValue={(x) => x}
          placeholder={lang}
          value={lang}
          // disabled={item.parentSelected=='Value'}
          onChange={(e) => handleLanguageChange(e)}
        />
      </div>
      <div>
        <h5>{props.data.title4}</h5>
        <InputText value={population} />
      </div>
    </div>
  );
}

export default DropdownComponent;
