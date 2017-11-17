'use strict';
var app = app || {};

((module) => {
  var comicView = {};

  const renderList = function(list) {
    let template = Handlebars.compile($('#list-template').text());
    return template(list);
  };
  const renderEventBlurb = function(item) {
    let template = Handlebars.compile($('#event-blurb-template').text());
    return template(item);
  };

  comicView.initIndexPage = () => {
    console.log('comicView.initIndexPage function called');
    $('#event-list').empty();
    $('.tab-content').hide();
    if($('#sort-button').html() === 'Sort Alphabetically'){
      app.Event.allSorted.forEach(item => $('#event-list').append(renderList(item)));
    }else{
      app.Event.all.forEach(item => $('#event-list').append(renderList(item)));
    }
    $('#main-list').fadeIn();
  };

  ////Results Page

  comicView.initResultsPage = (targetEvent) => {
    console.log('comicView.renderEventBlurb function called');
    $('#main-item').empty();
    $('.tab-content').hide();
    $('#main-item').append(renderEventBlurb(targetEvent));
    $('#main-item').fadeIn();
  };

  comicView.renderResultPane = type => {

    type = type.toLowerCase();

    $(`#main-item`).append(`<div id="${type}-results" class="result-pane"></div>`)

    if (app.Event[`${type}`].length === 0) {
      $(`#${type}-results`).append(`<h2>No ${type} for this Event!</h2>`);
      return;
    }

    $(`#${type}-results`).append(`<h2>${type}</h2>`);

    app.Event[`${type}`].forEach(item => {
      $(`#${type}-results`).append(`<img src="${item.imgUrl}"/>`);
      $(`#${type}-results:last-child`).append(`<p>${item.name}</p>`);
    })
  };

  ////About Page

  comicView.initAboutPage = () => {
    console.log('comicview.initAboutPage function called');
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.comicView = comicView;
})(app);

$('#sort-button').on('click', () => {
  console.log('sort button event handler clicked');
  if($('#sort-button').html() === 'Sort Alphabetically') {
    $('#sort-button').html('Sort by Timeline');
    app.comicView.initIndexPage();
  }else{
    app.Event.sortByTime();
    $('#sort-button').html('Sort Alphabetically');
    app.comicView.initIndexPage();
  }
});
