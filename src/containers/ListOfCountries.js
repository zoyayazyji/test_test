import React, { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';
import axios from 'axios';
import Country from '../components/Country';
import CountyInfo from '../components/CountryInfo';
import "./ListOfCountries.css";

const BASE_URL = "https://restcountries.com/v2/";
const ALL_COUNTRIES = "all"
const COUNTRY_NAME = "name/"
const COUNTRY_CODE = "https://restcountries.com/v2/alpha/"

const makeRequest = (countryId) => {
  if (countryId.borders) {
    const borderEach = countryId.borders.map(async elem => {
      let border = elem;
      const borderUrl = `${COUNTRY_CODE}${border}`;
      const borderName = await axios.get(borderUrl);
      return {
        borders: borderName?.data.name
      }
    });
    const borderList = Promise.all(borderEach);
    return borderList;
  } else {
    return (
      { borders: "There is no borders" }
    )
  };
};

const ListOfCountries = () => {

  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [style, setStyle] = useState({ display: "none" });
  const [preloader, setPreloader] = useState({ display: "block" });

  useEffect(() => {
    const getCountries = async () => {
      const countriesList = await axios.get(BASE_URL + ALL_COUNTRIES);
      const promises = countriesList.data.map(async country => {
        const countryUrl = `${BASE_URL}${COUNTRY_NAME}${country.name}`;
        const countryName = await axios.get(countryUrl);
        let bordersName = await makeRequest(countryName.data[0])
        return await {
          ...country,
          name: countryName.data[0].name,
          borders: bordersName
        }
      })
      const countryList = await Promise.all(promises);
      setCountries(countryList);
    };
    getCountries();
  }, []);

  

  const getPreloader = () => {
    if (countries.length > 0) {
      return setPreloader({ display: "none" });
    }
  };
  useEffect(() => {
    getPreloader();
  }, [countries]);

  const clickHandler = (id) => {
    setSelectedCountryId(id);
    setStyle({ display: "block" });
  };
  return (
    <>
      <Preloader
        preloader={preloader} />
      <section>
        <div className="container">
          <h2>Check</h2>
          {countries.map((country, i) => (
            <Country
              key={i}
              country={country.name}
              selectedCountryId={() => clickHandler(country)}
            />
          ))}
        </div>
      </section>
      <section>
        <CountyInfo
          countryId={selectedCountryId}
          countries={countries}
          setCountryId={setSelectedCountryId}
          style={style} />
      </section>
    </>
  )
};

export default ListOfCountries;


