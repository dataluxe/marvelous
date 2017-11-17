'use strict';

var app = app || {};

const __API_URL__ = 'https://be-marvelous.herokuapp.com';

((module) => {

  function Event (results) {
    this.id = parseInt(results.id, 10);
    this.title = results.title;
    this.name = results.name;
    this.description = results.description;
    this.startDate = results.start || '2037-01-01 01:00:00';
    this.imgUrl = `${results.thumbnail.path}.${results.thumbnail.extension}`.replace('http://', 'https://');
    this.comics = results.comics.items;
    this.characters = results.characters.items;
  }
  Event.all = [];
  Event.allSorted = [];
  Event.characters = [];
  Event.comics = [];

  function Character (obj) {
    this.id = parseInt(obj.id, 10);
    this.name = obj.name;
    this.description = obj.description || 'This character is not well-known enough to warrant a description.';
    this.imgUrl = `${obj.thumbnail.path}.${obj.thumbnail.extension}`.replace('http://', 'https://');
  }

  function Comic (obj) {
    this.id = parseInt(obj.id, 10);
    this.title = obj.title;
    this.description = obj.description || 'No description for this comic issue... yet!';
    this.imgUrl = `${obj.thumbnail.path}.${obj.thumbnail.extension}`.replace('http://', 'https://');
  }

  Event.sortByTime = () => {
    console.log('sortByTime function called');
    Event.allSorted = Array.from(Event.all);
    Event.allSorted.sort((a,b) => (new Date(a.startDate)) - (new Date(b.startDate)));
  }

  Event.loadAll = results => {
    console.log('ME.loadAll function called.');
    Event.all = results.map(event => {
      return new Event(event);
    })
  };

  Event.fetchAllEvents = (ctx, callback) => {
    console.log('ME.fetchAll function called.')
    $.get(`${__API_URL__}/events`)
      .then(object => {
        let results = object.data.results;
        Event.loadAll(results);
      })
      .then(callback)
      .catch()
  }

  Event.fireResultsPage = (ctx) => {
    console.log('ME.fetchOne function called.');
    let eventId = parseInt(ctx.params.id);
    let targetEvent = app.Event.all.filter(e=>{return e.id===eventId})[0];
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
        app.comicView.renderResultPane('characters');
      })
  }

  Event.fetchComics = (ctx) => {
    console.log('fetchComics function called');
    $.get(`${__API_URL__}/events/${ctx.params.id}/comics`)
      .then(object => {
        let results = object.data.results;
        Event.comics = results.map(comic => new Comic(comic));
        app.comicView.renderResultPane('comics');
      })
  }

  module.Event = Event;
})(app);
