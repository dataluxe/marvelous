'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

//Phelan's KEY: https://gateway.marvel.com/v1/public/events?ts=1&apikey=67a9f1536771a4e4d1698c8a90d1a525&hash=4be6cad9d73ec1b42f0371affbab1242

var testObjects = require('testObjects.js');

app.get('/events', (req, res) => {
  console.log('GET request for all events');
  const url = 'https://gateway.marvel.com/v1/public/events?ts=1&apikey=8f383650dd0864c94f8791e0fd882bba&hash=d128beebf105cf06f3b4b433ef85073c';
  superagent(url)
    .then(
      data => res.send(data.body),
      err => res.send(err)
    )
});

// app.get('/testEvents', (req, res) => {
//   console.log('GET Dummy Events');
//   res.send(testObjects.events)
// });

//TODO: Fix caracter / comic ids to match current REAL event data.

//rediscover how to strip out ID - ctx?
//Do Logic to send back ONLY comics within the passed-in event's Comic array
app.get('/testComics/:id', (req, res) => {
  console.log('GET Dummy Comics for an event');
  var results = testObjects.comics.map();
  res.send(results)
});

//rediscover how to strip out ID - ctx?
//Do Logic to send back ONLY Heroes within the passed-in event's Hero array
app.get('/testCharacters/:id', (req, res) => {
  console.log('GET Dummy Characters for an event');
  var results = testObjects.characters.map();
  res.send(results)
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
