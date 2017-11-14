'use strict';

const __API_URL__ = 'http://localhost:3000';

function Event (rawDataObject) {
  this.title = rawDataObject.results.title;
  this.id = rawDataObject.results.id;
  this.imgUrl = `${rawDataObject.results.thumbnail.path}${rawDataObject.results.thumbnail.extension}`;
  this.comics = rawDataObject.results.comics.items;
  this.characters = rawDataObject.results.characters.items;
}

Event.all = [];

Event.loadAll = rawData => {
  Event.all = rawData.map(eventObj => new Event(eventObj));
};

Event.fetchAll = callback => {
  $.get(`${__API_URL__}/events`)
    .then(Event.loadAll)
    .then(callback)
    .catch(console.error(err));
}
