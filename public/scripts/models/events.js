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
  Event.one = [];

  Event.loadAll = results => {
    console.log('ME.loadAll function called.');
    Event.all = results.map(event => {
      console.log(event);
      return new Event(event);
    })
  };

  Event.loadOne = results => {
    console.log('ME.loadOne function called.');
    Event.one = results.map(event => {
      console.log(event);
      return new Event(event);
    })
  };

  Event.fetchAll = (callback, ctx) => {
    console.log('ME.fetchAll function called.')
    console.log(ctx);
    $.get(`${__API_URL__}${ctx.path}`)
      .then(object => {
        console.log('ME.fetchAll -> first get.then called.');
        let results = object.data.results;
        console.log(results);
        Event.loadAll(results);
      })
      .then(callback)
      .catch()
  }

  Event.fetchOne = (callback, ctx) => {
    console.log('ME.fetchOne function called.')
    console.log(ctx.path);
    $.get(`${__API_URL__}${ctx.path}`, ctx.params.id)
      .then(object => {
        console.log('ME.fetchOne -> first get.then called.');
        let results = object.data.results;
        console.log(results);
        Event.loadOne(results);
      })
      .then(callback)
      .catch()
  }


  module.Event = Event;
})(app);
