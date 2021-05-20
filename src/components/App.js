import Main from "../components/Main.js";
import api from "../utils/api.js";
import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Character from "../components/Character.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";




function App() {
  const [characters, setCharacters] = React.useState([]);
  const [heroes, setHeroes] = React.useState([]);
  const [planets, setPlanets] = React.useState([]);
  const [planet, setPlanet] = React.useState({
    name: "",
    climate: "",
    diameter: "",
    gravity: "",
    orbital_period: "",
    population: "",
    rotation_period: "",
    terrain: "",
  });

  React.useEffect(() => {
    api
      .getAllPlanets()
      .then((data) => {
        setPlanets(data.results);
      })
      .catch((err) => {
        console.log(`упс, возникла ошибка! ${err}}`);
      });
  }, []);

  React.useEffect(() => {
    characters.forEach((id) => {
      api
        .getCharacter(id)
        .then((hero) => {
          setHeroes((prev) => [...prev, hero]);
        })
        .catch((err) => {
          console.log(`упс, возникла ошибка! ${err}}`);
        });
    });
  }, [characters]);

  function onPlanet(planet) {
    setPlanet(planet);
  }

  function citizens(citizens) {
    setCharacters(citizens);
  }
  console.log(heroes);
  console.log(characters);
  return (
    <>
      <div className="page">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/planet">
              <div className="element__select">
                <h3 className="element__title">Выберите планету</h3>
              </div>
              <Main
                planet={planet}
                onPlanet={onPlanet}
                planets={planets}
                citizens={citizens}
                setHeroes={setHeroes}
              />
            </Route>
            <Route path="/character">
              <Character
                planet={planet}
                characters={characters}
                heroes={heroes}
              />
            </Route>
            <Route path="*">
              <Redirect to="/planet" />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
