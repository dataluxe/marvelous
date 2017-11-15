'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

//Phelan's KEY: https://gateway.marvel.com/v1/public/events?ts=1&apikey=67a9f1536771a4e4d1698c8a90d1a525&hash=4be6cad9d73ec1b42f0371affbab1242

app.get('/events', (req, res) => {
  console.log('GET request for all events');
  const url = 'https://gateway.marvel.com/v1/public/events?ts=1&apikey=8f383650dd0864c94f8791e0fd882bba&hash=d128beebf105cf06f3b4b433ef85073c';
  superagent(url)
    .then(
      data => res.send(data.body),
      err => res.send(err)
    )
});

app.get('/events/:id', (req, res) => {
  console.log('GET request for single event');
  const url = `https://gateway.marvel.com/v1/public/events/${req.params.id}?ts=1&apikey=8f383650dd0864c94f8791e0fd882bba&hash=d128beebf105cf06f3b4b433ef85073c`;
  superagent(url)
    .then(
      data => res.send(data.body),
      err => res.send(err)
    )
});

//Fetch comics for EventID from marvelAPI and return to Browser
app.get('/events/:id/comics', (request, response) => {
  let eventId = request.params.id;
  console.log(`GET results endpoint fired... eventId: ${eventId}`);
  let url = `https://gateway.marvel.com/v1/public/events/${eventId}/comics?ts=1&apikey=8f383650dd0864c94f8791e0fd882bba&hash=d128beebf105cf06f3b4b433ef85073c`;
  superagent(url)
    .then(
      data => {
        console.log(data.body);
        response.send(data.body)
      },
      err => response.send(err)
    )
});

//Fetch characters for EventID from marvelAPI and return to Browser
app.get('/events/:id/characters', (request, response) => {
  let eventId = request.params.id;
  console.log(`GET results endpoint fired... eventId: ${eventId}`);
  let url = `https://gateway.marvel.com/v1/public/events/${eventId}/characters?ts=1&apikey=8f383650dd0864c94f8791e0fd882bba&hash=d128beebf105cf06f3b4b433ef85073c`;
  superagent(url)
    .then(
      data => {
        console.log(data.body);
        response.send(data.body)
      },
      err => response.send(err)
    )
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
