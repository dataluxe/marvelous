'use strict';
var app = app || {};

page('/', () => page('/events'));
page('/events', (ctx) => app.Event.fetchAll(app.comicView.initIndexPage, ctx));
page('/event/:id', (ctx) => app.Event.fetchOne(app.comicView.initFetchOnePage, ctx));
// page('/characters', );
// page('/characters/:id', );
// page('/series', );
// page('/series/:id', );
// page('/comics', );
// page('/comics/:id', );

page();
