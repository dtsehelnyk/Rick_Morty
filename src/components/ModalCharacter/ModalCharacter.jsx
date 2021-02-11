import React, { useState, useEffect } from 'react';
import './ModalCharacter.scss';

export const ModalCharacter = ({
  image,
  name,
  species,
  gender,
  status,
  location,
  origin,
  modalReset
}) => {

  return (
    <div className="ModalCharacter">
      <button
        className="ModalCharacter__close"
        type="button"
        onClick={modalReset}
      >
        x
      </button>
      <div className="ModalCharacter__picture">
        <img
          className="ModalCharacter__image"
          src={image}
          alt={name}
        />
      </div>
      <ul className="ModalCharacter__list">
        <li>
          <b>Name: </b>
          {name}
        </li>
        <li>
          <b>Species: </b>
          {species}
        </li>
        <li>
          <b>Gender: </b>
          {gender}
        </li>
        <li>
          <b>Status: </b>
          {status}
        </li>
        <li>
          <b>Origin: </b>
          {origin.name}
        </li>
        <li>
          <b>Location: </b>
          {location.name}
        </li>
      </ul>
    </div>
  )
}