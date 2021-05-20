export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAllPlanets() {
    return fetch(this._url + "planets/", {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  getCharacter(character) {
    return fetch(character.replace("http", "https"), {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (!res.ok) {
      console.log("everything is ok");
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

const api = new Api({
  //создаем экземпляр класса API
  url: "https://swapi.dev/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
