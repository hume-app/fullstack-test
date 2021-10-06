/* eslint-disable security/detect-non-literal-fs-filename */
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs-extra'
import path from 'path'

const app = express()

// CORS
app.use(cors())

// Body parser
app.use(express.json())

// Logging
app.use(morgan('tiny'))

app.get('/api/transcript', async (req, res) => {
  const json = await fs.readJSON(path.join(__dirname, '../data/data.json'))

  res.send(json)
})

app.get('/api/file', async (req, res) => {
  const file = await fs.readFile(path.join(__dirname, '../data/audio.m4a'))

  res.send(file)
})

app.listen(3001, function () {
  // eslint-disable-next-line no-console
  console.log('Express is listening on port 3001')
})
