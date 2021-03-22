import { ServerBuilder } from './server.builder'
import { Di } from './di/di'

const PORT = process.env.PORT || ''

let di = new Di()

new ServerBuilder()
    .withPort(PORT)
    .register('/matches', async (req, res) => {
        // "date": "2021-04-29"
        const matches = await di.getMatchRepository().syncMatchesFor("2021-04-29")

        res.send(matches)
    })
    .register('/standings', async (req, res) => {
        // "id": 308, "season": 2020, "name": "Division 1", "country": "Saudi-Arabia"
        const standings = await di.getStadingRepository().syncStandingsFor("308", "2020")

        res.send(standings)
    })
    .build()
