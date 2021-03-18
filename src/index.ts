import { BetExpressApp } from './framework/express'
import { AxiosDataSource } from './framework/axios'

const PORT = process.env.PORT || ''
const FOOTBALL_API_BASE_URL = process.env.FOOTBALL_API_BASE_URL || ''
const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY || ''

let betApp = new BetExpressApp()
let axioDataSource = new AxiosDataSource(FOOTBALL_API_BASE_URL, FOOTBALL_API_KEY)

betApp.register('/fixtures', async (req, res) => {
    const fixtures = await axioDataSource.syncFixturesFor("2021-03-15")

    res.send(fixtures)
})

betApp.listen(PORT)
