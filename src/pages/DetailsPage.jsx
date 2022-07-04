import React from 'react';
import { useState} from 'react';
import countriesArray from '../countries.json';

import { useParams } from 'react-router-dom';


export default function DetailsPage() {
  const [filteredCountry, setfilteredCountry] = useState(countriesArray);
  const { countryId } = useParams();
  console.log(countryId);

   const foundCountry = filteredCountry.find((oneCountry) => {   
     return oneCountry.alpha3Code === countryId;
   });



  return (
    <div className="col-7">
      {!foundCountry && <h3>Project not found</h3>}
    
    {foundCountry && (
   <>    
    <h1>{foundCountry.name.common}</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: '30%'}}> Capital</td>
          <td>{foundCountry.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
          {foundCountry.area} <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
         <td>  {foundCountry.borders.map((border) => border)}</td>
        </tr>
      </tbody>
    </table>
    </>
    )}
  </div>

  )
}
