'use strict';
var app = app || {};

((module) => {
  var comicView = {};

  const renderList = function(list) {
    let template = Handlebars.compile($('#list-template').text());
    return template(list);
  };
  const renderItem = function(item) {
    let template = Handlebars.compile($('#item-template').text());
    return template(item);
  };
  const renderEventBlurb = function(item) {
    let template = Handlebars.compile($('#event-blurb-template').text());
    return template(item);
  };

  comicView.initIndexPage = () => {
    console.log('comicView.initIndexPage function called');
    $('#main-list').empty();
    $('.tab-content').hide();
    app.Event.all.forEach(item => $('#main-list').append(renderList(item)));
    $('#main-list').fadeIn();
  };

  ////Results Page

  comicView.initResultsPage = (targetEvent) => {
    console.log('comicView.renderEventBlurb function called');
    console.log(targetEvent);
    console.log(renderEventBlurb(targetEvent));
    $('#main-item').empty();
    $('.tab-content').hide();
    $('#main-item').append(renderEventBlurb(targetEvent));
    $('#main-item').fadeIn();
  };

  comicView.renderResultPane = (type) => {
    type = type.toLowerCase();

    let friendlyType = type.charAt(0).toUpperCase() + type.slice(1);

    console.log(type, friendlyType)

    $(`#main-item`).append(`<div id="${type}-results" class="result-pane"></div>`)
    $(`#${type}-results`).append(`<h2>${type}</h2>`);
    app.Event[`${type}`].forEach(item => {
      $(`#${type}-results`).append(`<img src="${item.imgUrl}"/>`);
    })
  };

  ////About Page

  comicView.initAboutPage = () => {
    console.log('comicview.initAboutPage function called');
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  // $('#dropdown').on('change', () => console.log('dropdown event handler called'));

  module.comicView = comicView;
})(app);
