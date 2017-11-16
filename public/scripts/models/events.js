'use strict';

var app = app || {};

const __API_URL__ = 'https://be-marvelous.herokuapp.com';

((module) => {

  function Event (results) {
    this.id = results.id;
    this.title = results.title;
    this.name = results.name;
    this.description = results.description;
    this.imgUrl = `${results.thumbnail.path}.${results.thumbnail.extension}`.replace('http://', 'https://');
    this.comics = results.comics.items;
    this.characters = results.characters.items;
  }
  Event.all = [];
  Event.one = [];
  Event.characters = [];
  Event.comics = [];

  function Character (obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description || 'This character is not well-known enough to warrant a de  scription.';
    this.imgUrl = `${obj.thumbnail.path}.${obj.thumbnail.extension}`.replace('http://', 'https://');
  }

  function Comic (obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description || 'No description for this comic issue... yet!';
    this.imgUrl = `${obj.thumbnail.path}.${obj.thumbnail.extension}`.replace('http://', 'https://');
  }

  Event.loadAll = results => {
    console.log('ME.loadAll function called.');
    Event.all = results.map(event => {
      console.log(event);
      return new Event(event);
    })
  };

  Event.fetchAllEvents = (ctx, callback) => {
    console.log('ME.fetchAll function called.')
    console.log(ctx);
    $.get(`${__API_URL__}/events`)
      .then(object => {
        console.log('ME.fetchAll -> first get.then called.');
        let results = object.data.results;
        console.log(results);
        Event.loadAll(results);
      })
      .then(callback)
      .catch()
  }

  Event.fireResultsPage = (ctx) => {
    console.log('ME.fetchOne function called.');
    let eventId = ctx.params.id;
    let targetEvent = app.Event.all.filter((e)=>e.id===eventId)
    app.comicView.initResultsPage(targetEvent);
    Event.fetchCharacters(ctx);
    Event.fetchComics(ctx);
  }

  Event.fetchCharacters = (ctx) => {
    console.log('fetchCharacters function called');
    $.get(`${__API_URL__}/events/${ctx.params.id}/characters`)
      .then(object => {
        let results = object.data.results;
        Event.characters = results.map(character => new Character(character));
        app.comicView.renderCharacters();
      })
  }

  Event.fetchComics = (ctx) => {
    console.log('fetchComics function called');
    $.get(`${__API_URL__}/events/${ctx.params.id}/comics`)
      .then(object => {
        let results = object.data.results;
        Event.comics = results.map(comic => new Comic(comic));
        app.comicView.renderComics();
      })
  }

  module.Event = Event;
})(app);
