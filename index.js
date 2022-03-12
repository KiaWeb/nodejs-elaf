const express = require('express')
const app = express()
const port = 3000
const open = require('open')
app.get('/', (req, res) => {
  res.send(`${port}, ${req}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
open(`http://localhost:${port}`)