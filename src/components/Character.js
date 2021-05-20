import React from "react";
import CharacterRend from "../components/CharacterRend.js";

function Character(props) {
  const [gender, setGender] = React.useState("all");

  function setMale() {
    setGender("male");
  }

  function setFemale() {
    setGender("female");
  }

  return (
    <>
      <div className="element__planet">
        <h3 className="element__title">{props.planet.name}</h3>
        <p className="element__text">Климат: {props.planet.climate}</p>
        <p className="element__text">
          Диаметр планеты: {props.planet.diameter}
        </p>
        <p className="element__text">Сила тяжести: {props.planet.gravity}</p>
        <p className="element__text">
          Орбитальный период: {props.planet.orbital_period}
        </p>
        <p className="element__text">Население: {props.planet.population}</p>
        <p className="element__text">
          Период вращения: {props.planet.rotation_period}
        </p>
        <p className="element__text">Вид планеты: {props.planet.terrain}</p>
      </div>
      <div className="element__planet">
        <h3 className="element__title">Персонажи</h3>
      </div>
      <div className="element__select">
        <h3 className="element__title">Выберите пол</h3>
        <button className="element__button" type="click" onClick={setMale}>
          Male
        </button>
        <button className="element__button" type="click" onClick={setFemale}>
          Female
        </button>
      </div>
      <article className="elements">
        {props.heroes.map((character) => {
          if (gender === "all") {
            return <CharacterRend hero={character} />;
          }
          if (gender === character.gender) {
            return <CharacterRend hero={character} />;
          }
        })}
      </article>
    </>
  );
}

export default Character;
