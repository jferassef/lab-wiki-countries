import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ country }) => {
  return (
    <div key={country.alpha3Code} class="col-5">
      <div className="list-group">
        <Link
          className="list-group-item list-group-item-action"
          to={`/countries/${country.alpha3Code}`}
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          />
          <p>{country.name.common}</p>
        </Link>
      </div>
    </div>
  );
};

export default CountriesList;
