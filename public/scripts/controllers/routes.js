'use strict';
var app = app || {};

page('/', app.comics.fetchAll, app.comicView.initIndexPage);

page();
