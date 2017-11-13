'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

//https://gateway.marvel.com/v1/public/events?ts=1&apikey=8f383650dd0864c94f8791e0fd882bba&hash=d128beebf105cf06f3b4b433ef85073c

app.get('/events', (req, res) => {
  console.log('GET request for all events');
  const url = 'https://gateway.marvel.com/v1/public/events?ts=1&apikey=8f383650dd0864c94f8791e0fd882bba&hash=d128beebf105cf06f3b4b433ef85073c';
  superagent(url)
    .then(
      data => res.send(data),
      err => res.send(err)
    )
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
