'use strict';

const __API_URL__ = 'http://localhost:3000';

function Event (results) {
  this.title = results.title;
  this.id = results.id;
  this.imgUrl = `${results.thumbnail.path}.${results.thumbnail.extension}`;
  this.comics = results.comics.items;
  this.characters = results.characters.items;
}

Event.all = [];

Event.loadAll = results => {
  Event.all = results.map(event => {
    console.log(event);
    return new Event(event);
  })
};

Event.fetchAll = () => {
  $.get(`${__API_URL__}/events`)
    .then(object => {
      let results = object.data.results;
      console.log(results);
      return results;
    })
    .then((results) => Event.loadAll(results))
    .catch();
}
