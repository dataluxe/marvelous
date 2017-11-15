'use strict';

var app = app || {};

const __API_URL__ = 'https://be-marvelous.herokuapp.com';

((module) => {

  function Event (results) {
    this.id = results.id;
    this.title = results.title;
    this.name = results.name;
    this.description = results.description;
    this.imgUrl = `${results.thumbnail.path}.${results.thumbnail.extension}`;
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
    this.description = obj.description || 'This character is not well-known enough to warrant a description.';
    this.imgUrl = `${obj.thumbnail.path}.${obj.thumbnail.extension}`;
  }

  function Comic (obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description || 'No description for this comic issue... yet!';
    this.imgUrl = `${obj.thumbnail.path}.${obj.thumbnail.extension}`;
  }

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

  Event.loadCharacters = results => {
    console.log(`Load Characters`);
    Event.characters = results.map(character => new Character(character));
  }
  Event.loadComics = results => {
    console.log(`Load Comics`);
    Event.comics = results.map(comic => new Comic(comic));
  }
  Event.fetchAll = (ctx, callback) => {
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

  Event.fetchOne = (ctx) => {
    console.log('ME.fetchOne function called.')
    console.log(ctx.path);
    $.get(`${__API_URL__}/events/${ctx.params.id}`)
      .then(object => {
        console.log('ME.fetchOne -> first get.then called.');
        let results = object.data.results;
        console.log(results);
        return ctx, results;
      })
      .then( (ctx, results) => {
        Event.loadOne(results);
        return ctx;
      })
      .then(ctx => {
        Event.fetchCharacters(ctx);
        return ctx;
      })
      .then(ctx => Event.fetchComics(ctx))
      .then(app.comicView.initFetchOnePage)
      .catch()
  }

  Event.fetchCharacters = (ctx) => {
    console.log('fetchCharacters function called');
    $.get(`${__API_URL__}/events/${ctx.params.id}/characters`)
      .then(object => {
        let results = object.data.results;
        Event.loadCharacters(results);
      })
  }

  Event.fetchComics = (ctx) => {
    console.log('fetchComics function called');
    $.get(`${__API_URL__}/events/${ctx.params.id}/comics`)
      .then(object => {
        let results = object.data.results;
        Event.loadComics(results);
      })
  }

  module.Event = Event;
})(app);
