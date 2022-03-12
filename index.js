const express = require('express')
const app = express()
const port = 3000
const open = require('open')
app.get('/', (req, res) => {
  res.send(`<h1 style="font-family: Arial, Helvetica, sans-serif;">Welcome to the Website! This is a test to see if it worked!</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
open(`http://localhost:${port}`)