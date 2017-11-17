'use strict';
var app = app || {};

page('/', () => page('/events'));
page('/events', (ctx) => app.Event.fetchAllEvents(ctx, app.comicView.initIndexPage));
page('/events/:id', (ctx) => app.Event.fireResultsPage(ctx));
page('/about', () => app.comicView.initAboutPage());

page();
