const express = require('express')
const axios = require('axios')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/apidata', (req, res) => {
  axios.get("https://resisted-aboard-koala.glitch.me/events")
  .then(response => res.send(response.data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})