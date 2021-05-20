import React from "react";

function CharacterRend(props) {
  return (
    <>
      <div className="element__container">
        <p className="element__text">Имя: {props.hero.name}</p>
        <p className="element__text">Пол: {props.hero.gender}</p>
        <p className="element__text">Рост: {props.hero.height}</p>
        <p className="element__text">Вес: {props.hero.mass}</p>
        <p className="element__text">Цвет волос: {props.hero.hair_color}</p>
        <p className="element__text">Цвет кожи: {props.hero.skin_color}</p>
        <p className="element__text">Год рождения: {props.hero.birth_year}</p>
      </div>
    </>
  );
}

export default CharacterRend;
