import express from 'express'
import axios from 'axios'
import { FootballApi } from './football.api'

const PORT = process.env.PORT || ''
const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY || ''
const FOOTBALL_API_BASE_URL = process.env.FOOTBALL_API_BASE_URL || ''


/**
 *  Express Configuration
 */
const app = express()
app.use(express.json())

const axiosFootballApi = axios.create({
  baseURL: FOOTBALL_API_BASE_URL,
  headers: {
    'x-rapidapi-key': FOOTBALL_API_KEY
  }
})


/**
 * Setup the endpoints
 */
app.get('/fixtures', async (req, res) => {
  const fixtures = await new FootballApi(axiosFootballApi).syncFixturesFor("2021-03-15")

  return res.send(fixtures)
})


/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
  