import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import './Characters.scss';

import { getCharacters } from '../../api/characters';
import { CharactersFilter } from './CharactersFilter/CharactersFilter';
import { Character } from '../Character/Character';
import { ModalCharacter } from '../ModalCharacter/ModalCharacter';

export const Characters = () => {
  // персонажи
  const [ charactersFromServer, setCharacters ] = useState([]);

  // подходит под условия
  const [ cardsAmount, setCardsAmount ] = useState(0);
  const [ pagesAmount, setPagesAmount ] = useState(0);

  // текущая страница
  const [ currentPage, setCurrentPage] = useState(1);

  // модалка
  const [ currentModal, setModal ] = useState(null);

  // фильтры
  const [ filterParams, setFilter ] = useState({
    status: '',
    species: '',
    gender: '',
  });

  const {status, species, gender} = filterParams;

  useEffect(async () => {
    const newCharacters = await getCharacters(
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

  console.log(filterParams);

  return (
    <div className="Characters">
      <CharactersFilter
        handleFilter={handleFilter}
      />

      <div className="Characters__info">
        <p>Found characters: {cardsAmount || "0"}</p>
        <p>Pages: {pagesAmount || "0"}</p>
      </div>

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

      {pagesAmount > 1 &&
        <>
          <div className="Characters__pagination">
            {currentPage > 1 &&
              <button
                type="button"
                className="Characters__page-button"
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
            }

            {currentPage > 3 && "..."}

            {currentPage > 2 &&
              <button
                type="button"
                className="Characters__page-button"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </button>
            }

            <button
              disabled
              type="button"
              className="Characters__page-button"
            >
              {currentPage}
            </button>

            {(currentPage < pagesAmount - 1) &&
              <>
                <button
                  type="button"
                  className="Characters__page-button"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {currentPage + 1}
                </button>
              </>
            }

            {(currentPage < pagesAmount - 2) && "..."}

            {currentPage < pagesAmount &&
              <button
                type="button"
                className="Characters__page-button"
                onClick={() => setCurrentPage(pagesAmount)}
              >
                {pagesAmount}
              </button>
            }
          </div>

          <div className="Characters__nav">
            <button
              type="button"
              className={classNames("Characters__nav-toggler", {
                "Characters__nav-toggler--disabled": (currentPage < 2),
              })}
              onClick={(event) => {
                event.preventDefault();
                modalReset();
                setCurrentPage(currentPage => currentPage - 1);
              }}
            >
              back
            </button>

            <button
              type="button"
              className={classNames("Characters__nav-toggler", {
                "Characters__nav-toggler--disabled": (pagesAmount <= currentPage),
              })}
              onClick={(event) => {
                event.preventDefault();
                modalReset();
                setCurrentPage(currentPage => currentPage + 1);
              }}
            >
              forward
            </button>
          </div>
        </>
      }

      {currentModal &&
        <ModalCharacter {...currentModal} modalReset={modalReset} />
      }
    </div>
  );
}
