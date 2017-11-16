'use strict';
var app = app || {};

page('/', () => page('/events'));
page('/events', (ctx) => app.Event.fetchAllEvents(ctx, app.comicView.initIndexPage));
page('/events/:id', (ctx) => app.Event.fireResultsPage(ctx));
// page('/characters', );
// page('/characters/:id', );
// page('/series', );
// page('/series/:id', );
// page('/comics', );
// page('/comics/:id', );

page();
