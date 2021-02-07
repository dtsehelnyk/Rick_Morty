import React, { useState, useEffect } from 'react';
import './Characters.scss';
import classNames from 'classnames';

import { getCharacters } from '../../api/characters';
import { Character } from '../Character/Character';
import { ModalCharacter } from '../ModalCharacter/ModalCharacter';

export const Characters = () => {
  const [ characters, setCharacters ] = useState([]);
  const [ cardsAmount, setCardsAmount ] = useState(0);
  const [ currentPage, setCurrentPage] = useState(1);
  const [ cardsIndexes, setCardsIndexes ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [ currentModal, setModal ] = useState(null);

  const handlePage = (indexPage, direction) => {
    let newIndexes;

    if (direction === 'forward') {
      newIndexes = cardsIndexes.map(card => card + indexPage);
      setCurrentPage(currentPage => currentPage + 1);
      setCardsIndexes(newIndexes);
      return;
    }

    newIndexes = cardsIndexes.map(card => card - indexPage);
    setCurrentPage(currentPage => currentPage - 1);
    setCardsIndexes(newIndexes);
  };

  useEffect(async () => {
    const characters = await getCharacters(`character`);

    setCardsAmount(characters.info.count);
  }, []);


  useEffect(async () => {
    const newCharacters = await getCharacters(`character/${cardsIndexes}`);

    setCharacters(newCharacters);
  }, [cardsIndexes]);


  const showMore = ({...characterInfo}) => {
    setModal(characterInfo);
  }

  const modalReset = () => {
    setModal(null);
  }

  return (
    <div className="Characters">
      <div className="Characters__list">
        {
          characters.map(character => (
            <Character
              showMore={showMore}
              key={character.id}
              {...character}
            />
          ))
        }
      </div>

      <div className="Characters__nav">
        <a
          className={classNames("Characters__nav-toggler", {
            "Characters__nav-toggler--disabled": (currentPage <= 1),
          })}
          onClick={(event) => {
            event.preventDefault();
            modalReset();
            handlePage(cardsIndexes.length, 'back');
          }}
          href="#"
        >
          back
        </a>

        <a
          className={classNames("Characters__nav-toggler", {
            "Characters__nav-toggler--disabled":
              ((cardsAmount / cardsIndexes.length) < currentPage),
          })}
          onClick={(event) => {
            event.preventDefault();
            modalReset();
            handlePage(cardsIndexes.length, 'forward');
          }}
          href="#"
        >
          forward
        </a>
      </div>

      {currentModal &&
        <ModalCharacter {...currentModal} modalReset={modalReset} />
      }
    </div>
  );
}
