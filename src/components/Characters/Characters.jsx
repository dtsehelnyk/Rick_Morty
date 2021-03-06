import React, { useState, useEffect } from 'react';
import './Characters.scss';

import { getData } from '../../api/api';
import { CharactersFilter } from './CharactersFilter/CharactersFilter';
import { Character } from '../Character/Character';
import { ModalCharacter } from '../ModalCharacter/ModalCharacter';
import { Pagination } from '../Pagination/Pagination';
import { ListNav } from '../ListNav/ListNav';

export const Characters = () => {
  const [ charactersFromServer, setCharacters ] = useState([]);

  const [ cardsAmount, setCardsAmount ] = useState(0);
  const [ pagesAmount, setPagesAmount ] = useState(0);
  const [ currentPage, setCurrentPage] = useState(1);

  const [ currentModal, setModal ] = useState(null);
  const [ filterParams, setFilter ] = useState({
    status: '',
    species: '',
    gender: '',
  });

  const {status, species, gender} = filterParams;

  useEffect(async () => {
    const newCharacters = await getData(
      `character/?page=${currentPage}&status=${status}&gender=${gender}&species=${species}`
    );

    if (newCharacters.error) {
      setCharacters(newCharacters.results);
      setCardsAmount(0);
      setPagesAmount(0);

      console.log(newCharacters.error);
      return;
    }

    setCardsAmount(newCharacters.info.count);
    setPagesAmount(newCharacters.info.pages);
    setCharacters(newCharacters.results);
  }, [currentPage, filterParams]);

  const showMore = ({...characterInfo}) => {
    setModal(characterInfo);
  };

  const modalReset = () => {
    setModal(null);
  }

  const handleFilter = (filter) => {
    setFilter({...filter});
    setCurrentPage(1);
  };

  return (
    <div className="Characters">
      <h1 className="Characters__title">Characters</h1>
      <div className="Characters__info">
        <p>Found characters: {cardsAmount || "0"}</p>
        <p>Pages: {pagesAmount || "0"}</p>
      </div>

      <CharactersFilter
        handleFilter={handleFilter}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesAmount={pagesAmount}
      />

      <ListNav
        currentPage={currentPage}
        pagesAmount={pagesAmount}
        setCurrentPage={setCurrentPage}
      />

      {charactersFromServer &&
        <div className="Characters__list">
            {
              charactersFromServer.map(character => (
                <Character
                  showMore={showMore}
                  key={character.id}
                  {...character}
                />
              ))
            }
        </div>
      }

      {currentModal &&
        <ModalCharacter {...currentModal} modalReset={modalReset} />
      }
    </div>
  );
}
