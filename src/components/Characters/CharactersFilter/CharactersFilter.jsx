import React, { useState, useEffect } from 'react';
import './CharactersFilter.scss';
// import classNames from 'classnames';

export const CharactersFilter = ({ handleFilter, characters }) => {
  const [ status, setStatus ] = useState('All');
  const [ species, setSpecies ] = useState('All');
  const [ gender, setGender ] = useState('All');


  return (
    <form action="">
      <select
        value={status}
        name="status"
        onChange={(event) => {
          setStatus(event.target.value);
          handleFilter("status", status);
        }}
      >
        <option value="All">All</option>
        <option value="Dead">Dead</option>
      </select>

      <select
        value={species}
        name="species"
        onChange={(event) => setSpecies(event.target.value)}
      >
        <option value="All">All</option>
        <option></option>
      </select>

      <select
        value={gender}
        name="gender"
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="All">All</option>
        <option></option>
      </select>
    </form>
  )
}