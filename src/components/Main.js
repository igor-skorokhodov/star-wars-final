import React from "react";
import Planet from "../components/Planet.js";

function Main(props) {
  return (
    <div className="elements">
      {props.planets.map((planet) => {
        return (
          <Planet
            setHeroes={props.setHeroes}
            name={planet.name}
            rotation_period={planet.rotation_period}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
            climate={planet.climate}
            gravity={planet.gravity}
            population={planet.population}
            terrain={planet.terrain}
            url={planet.url}
            characters={planet.residents}
            onPlanet={props.onPlanet}
            citizens={props.citizens}
          />
        );
      })}
    </div>
  );
}

export default Main;
