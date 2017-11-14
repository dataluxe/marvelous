'use strict';

var app = app || {};

const __API_URL__ = 'http://localhost:3000';

((module) => {

  function Event (results) {
    this.id = results.id;
    this.title = results.title;
    this.imgUrl = `${results.thumbnail.path}.${results.thumbnail.extension}`;
    this.comics = results.comics.items;
    this.characters = results.characters.items;
  }

  Event.all = [];

  Event.loadAll = results => {
    console.log('ME.loadAll function called.');
    Event.all = results.map(event => {
      console.log(event);
      return new Event(event);
    })
  };

  Event.fetchAll = () => {
    console.log('ME.fetchAll function called.')
    $.get(`${__API_URL__}/events`)
      .then(object => {
        console.log('ME.fetchAll -> first get.then called.');
        let results = object.data.results;
        console.log(results);
        Event.loadAll(results);
      })
      .then(app.comicView.initIndexPage)
      .catch()
  }


  module.Event = Event;
})(app);
