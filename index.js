const express = require('express')
const getDatas = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

var cors = require('cors')
app.use(cors())

app.use(express.static('public'))

app.get('/videos', async (req, res) => {
  const datas = await getDatas()
  res.json(datas)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))
