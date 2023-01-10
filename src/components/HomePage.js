import React, { useState, useEffect } from 'react';
import CardOnMain from "./CardOnMain";

import './HomePage.css'


function HomePage() {
  const [countryList, setCountryList] = useState([]);
  const [countyCode, setCountryCode] = useState({})


  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCountryList(json);
        localStorage.setItem("countries", JSON.stringify(json));
        let tempDict = {};
        for (let i = 0; i < json.length; i++) {
          tempDict[json[i].cca3] = json[i].name.common
        }

        setCountryCode(tempDict);

      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  function selectedRegion(e) {
    var countries = JSON.parse(localStorage.getItem("countries"));
    let tempList = countries.filter(item => item.continents[0].includes(e.target.value));
    setCountryList(tempList);
  }

  function searchCountry(e) {
    var countries = JSON.parse(localStorage.getItem("countries"));
    let tempList = countries.filter(item => item.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
    setCountryList(tempList);
  }

  return (
    <div className="HomePage">
      <select onChange={selectedRegion} className="drop-down" defaultValue="default">
        <option className='filter-option' value="default" disabled hidden>Filter by Region</option>
        <option className='filter-option' value="Africa">Africa</option>
        <option className='filter-option' value="America">America</option>
        <option className='filter-option' value="Europe">Europe</option>
        <option className='filter-option' value="Oceania">Oceania</option>
        <option className='filter-option' value="Asia">Asia</option>
      </select>
      <input onChange={searchCountry} className="search-bar" type="search" placeholder="search for a country..." />
      <div className="card-container">
        <div className="column">
          {countryList.map((item, indx) => {
            return <CardOnMain key={indx} place={indx} name={item} countryCode={countyCode}></CardOnMain>
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
