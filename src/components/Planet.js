import React from "react";
import { useHistory } from "react-router-dom";

function Planet(props) {
  const history = useHistory();

  function handleClick() {
    props.onPlanet({
      name: props.name,
      climate: props.climate,
      diameter: props.diameter,
      gravity: props.gravity,
      population: props.population,
      orbital_period: props.orbital_period,
      rotation_period: props.rotation_period,
      terrain: props.terrain,
    });
    props.citizens(props.characters);
    props.setHeroes([])
    history.push("/character");
  }

  return (
    <>
      <article className="element">
        <div className="element__container" onClick={handleClick}>
          <h3 className="element__title">{props.name}</h3>
          <p className="element__text">Климат: {props.climate}</p>
          <p className="element__text">Диаметр планеты: {props.diameter}</p>
          <p className="element__text">Сила тяжести: {props.gravity}</p>
          <p className="element__text">
            Орбитальный период: {props.orbital_period}
          </p>
          <p className="element__text">Население: {props.population}</p>
          <p className="element__text">
            Период вращения: {props.rotation_period}
          </p>
          <p className="element__text">Вид планеты: {props.terrain}</p>
        </div>
      </article>
    </>
  );
}

export default Planet;
