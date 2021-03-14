import { AxiosInstance } from 'axios'
import { Fixtures, Match } from './model/fixtures.model'

export class FootballApi {
    timezone = "America/Lima"

    constructor(
        private axios: AxiosInstance
    ) {}

    public async syncFixturesFor(
        date: String
    ) : Promise<Match[]> {
        const fixtures = await this.axios.request<Fixtures>({
            url: '/fixtures',
            method: 'GET',
            params: {
                status: "NS",
                timezone: this.timezone,
                date: date
            }
        })

        console.log(fixtures.data.response[0].teams.away)
        
        return fixtures.data.response;
    }
}
