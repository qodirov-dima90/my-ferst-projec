const express = require('express')
const app = express()
const port = 3000
const songTitle= ["Ad-Lib Blues","Alice Blue Gown", "All of Me"]

app.get('/', (req, res) => {
    var random_song = songTitle[Math.floor(Math.random()*songTitle.length)]
    res.send(random_song)
})

app.get('/asosiy', (req, res) => {
    res.send('<h1>Asosiy sahifaga hush keldingiz</h1>')
  })


  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})