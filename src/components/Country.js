const Country = ({ country, selectedCountryId }) => {
  return (
    <div onClick={selectedCountryId}>
      <li style={{ cursor: "pointer" }}>{country}</li>
    </div>
  )
}

export default Country;