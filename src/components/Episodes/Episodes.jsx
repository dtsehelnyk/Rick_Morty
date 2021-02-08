import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Episodes.scss';

import { getData } from '../../api/api';
import { EpisodesFilter } from './EpisodesFilter/EpisodesFilter';

export const Episodes = () => {
  const [ episodesFromServer, setEpisodes ] = useState([]);
  const [ episodesAmount, setEpisodesAmount ] = useState(0);
  const [ pagesAmount, setPagesAmount ] = useState(0);

  const [ currentPage, setCurrentPage ] = useState(1);

  const [ query, setQuery ] = useState('');

  useEffect( async() => {
    const newEpisodes = await getData(
      `episode?page=${currentPage}&name=${query}`
    );
    
    if (newEpisodes.error) {
      return;
    }

    console.log(newEpisodes);

    setEpisodesAmount(newEpisodes.info.count);
    setPagesAmount(newEpisodes.info.pages);
    setEpisodes(newEpisodes.results);
  }, [currentPage, query]);

  const handleSearch = (titleRequest) => {
    setQuery(titleRequest);
  }

  return (
    <div className="Episodes">
      <h1 className="Episodes__title">Episodes</h1>
      <div className="Episodes__info">
        <p>Found series: {episodesAmount || "0"}</p>
        <p>Pages: {pagesAmount || "0"}</p>
      </div>

      <EpisodesFilter handleSearch={handleSearch}/>

      <table className="Episodes__table">
        <thead>
          <tr>
            <td>№</td>
            <td>Episodes</td>
            <td>Title</td>
            <td>Air date</td>
          </tr>
        </thead>

        <tbody>
          {episodesFromServer.map(episode => (
            <tr key={episode.id}>
              <td>{episode.id}.</td>
              <td>{episode.episode}</td>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="Episodes__nav">
        <button
          type="button"
          className={classNames("Episodes__nav-toggler", {
            "Episodes__nav-toggler--disabled": (currentPage < 2),
          })}
          onClick={(event) => {
            event.preventDefault();
            setCurrentPage(currentPage => currentPage - 1);
          }}
        >
          back
        </button>

        <button
          type="button"
          className={classNames("Episodes__nav-toggler", {
            "Episodes__nav-toggler--disabled": (pagesAmount <= currentPage),
          })}
          onClick={(event) => {
            event.preventDefault();
            setCurrentPage(currentPage => currentPage + 1);
          }}
        >
          forward
        </button>
      </div>
    </div>
  );
}
