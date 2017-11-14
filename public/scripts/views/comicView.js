'use strict';
var app = app || {};

((module) => {
  var comicView = {};

  const render = function(list) {
    let template = Handlebars.compile($('#list-template').text());
    return template(list);
  };

  comicView.initIndexPage = () => {
    console.log('comicView.initIndexPage function called');
    $('#search-page').empty();
    $('.tab-content').hide();
    Event.all.forEach(item => $('#main-list').append(render(item)));
    $('#search-page').fadeIn();
  };

  // $('#dropdown').on('change', () => console.log('dropdown event handler called'));

  module.comicView = comicView;
})(app);
