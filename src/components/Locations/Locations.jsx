import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Locations.scss';

import { getData } from '../../api/api';
import { LocationsFilter } from './LocationsFilter/LocationsFilter';
import { Pagination } from '../Pagination/Pagination';

export const Locations = () => {
  const [ locationsFromServer, setLocations ] = useState([]);
  const [ locationsAmount, setLocationsAmount ] = useState(0);
  const [ pagesAmount, setPagesAmount ] = useState(0);

  const [ currentPage, setCurrentPage ] = useState(1);

  const [ filter, setFilter ] = useState({
    name: '',
    type: '',
    dimension: '',
  });

  const { name, type, dimension } = filter;

  useEffect( async() => {
    const newLocations = await getData(
      `location?page=${currentPage}&name=${name}&type=${type}&dimension=${dimension}`
    );

    if (newLocations.error) {
      setLocationsAmount(0);
      setPagesAmount(0);

      console.log(newLocations.error);
      return;
    }

    console.log(newLocations);

    setLocationsAmount(newLocations.info.count);
    setPagesAmount(newLocations.info.pages);
    setLocations(newLocations.results);
  }, [currentPage, filter]);

  const handleFilter = (filter) => {
    setFilter({...filter});
    setCurrentPage(1);
  };

  return (

      <div>
        <h1 className="Locations__title">Locations</h1>

        <div className="Locations__info">
          <p>Found characters: {locationsAmount || "0"}</p>
          <p>Pages: {pagesAmount || "0"}</p>
        </div>

        <LocationsFilter
          handleFilter={handleFilter}
        />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pagesAmount={pagesAmount}
        />

        {locationsAmount > 0 &&
          <>
            <div className="Locations__nav">
              <button
                type="button"
                className={classNames("Locations__nav-toggler", {
                  "Locations__nav-toggler--disabled": (currentPage < 2),
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
                className={classNames("Locations__nav-toggler", {
                  "Locations__nav-toggler--disabled": (pagesAmount <= currentPage),
                })}
                onClick={(event) => {
                  event.preventDefault();
                  setCurrentPage(currentPage => currentPage + 1);
                }}
              >
                forward
              </button>
            </div>

            <table className="Locations__table">
              <thead>
                <tr>
                  <td>№</td>
                  <td>Name</td>
                  <td>Type</td>
                  <td>Dimension</td>
                </tr>
              </thead>

              <tbody>
                {locationsFromServer.map(location => (
                  <tr key={location.id}>
                    <td>{location.id}.</td>
                    <td>{location.name}</td>
                    <td>{location.type}</td>
                    <td>{location.dimension}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }
      </div>
  );
}
