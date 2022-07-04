import React from 'react'
import CountriesList from '../components/CountriesList'
import countriesArray from '../countries.json';
import { useState } from 'react';


export default function HomePage() {
  const [countries, setCountries] = useState(countriesArray);
  return (
    <div>
      <h1>Home page</h1>
      {countries.map(country => {
        return  <CountriesList country={country} />
       })
       }    
    </div>
  )
}