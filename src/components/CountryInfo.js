import React, { useState } from 'react';
import CountryDetails from './CountryDetails';
import Borders from "./Borders";


const CountyInfo = ({ countryId, style }) => {

  const [border, setBorder] = useState("No borders");

  return (
    <div className="country_info_container" style={style}>
      <CountryDetails
        country={countryId?.name}
        capital={countryId?.capital}
        flag={countryId?.flag}
        population={countryId?.population}
        region={countryId?.region}
      />
      <div className="borders_container">
        <h3>Borders :</h3>
        {countryId?.borders?.length >= 1 ?
          countryId?.borders?.map((elem, i) => (
            <Borders
              key={i}
              borders={elem.borders}
            />
          )) 
            : border
        }
      </div>
    </div>
  )
}

export default CountyInfo;

