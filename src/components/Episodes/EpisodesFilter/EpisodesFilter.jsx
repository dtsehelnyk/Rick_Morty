import React, { useEffect, useState } from 'react';
// import classNames from 'classnames';
import './EpisodesFilter.scss';

export const EpisodesFilter = ({ handleSearch }) => {
  const [ query, setQuery ] = useState('');

  return(
    <input
      className="EpisodesFilter"
      type="text"
      value={query}
      onChange={event => {
        setQuery(event.target.value);
        handleSearch(event.target.value);
      }}
    />
  )
}
