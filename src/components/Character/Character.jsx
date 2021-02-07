import React, { useState } from 'react';
import './Character.scss';
import classNames from 'classnames';

export const Character = (props) => {
  const { id, name, status, species, gender, image, showMore } = props;

  return (
    <div
      onClick={() => showMore(props)}
      className={classNames("Character", {
        "Character--alive": status === "Alive",
        "Character--dead": status === "Dead",
        "Character--unknown": status === "unknown",
      })}
    >
      <div className="Character__picture">
        <img
          className="Character__image"
          src={image}
          alt={name}
        />
      </div>

      <div className="Character__info">
        <span className="Character__index">
          {id}
        </span>

        <p className="Character__name">
          Name: {name}
        </p>

        <p className="Character__speacies">
          Species: {species}
        </p>

        <p className="Character__gender">
          Gender: {gender}
        </p>
      </div>
    </div>
  )
}
