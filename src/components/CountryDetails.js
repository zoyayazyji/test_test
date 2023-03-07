const CountryDetails = ({ country, capital, flag, population, region }) => {

  return (
    <div className="country_details">
      <div className="country_info">
        <h1 className="country_name">{country}</h1>
        <p className="country_capital">Capital : <strong>{capital}</strong> </p>
        <p className="country_population">Population : <strong>{population}</strong> </p>
        <p className="country_region">Region : <strong>{region}</strong> </p></div>
      <div className="country_flag"><p><img src={flag} alt="flag" /></p></div>
    </div>
  )
};

export default CountryDetails;