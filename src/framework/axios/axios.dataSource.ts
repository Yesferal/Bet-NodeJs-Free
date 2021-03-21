import { AxiosInstance } from 'axios'
import { Match } from '../../domain/model/match.model'
import { ApiDataSource } from '../../data/api.dataSource'
import { AxiosBuilder } from './axios.builder'
import { FixturesResponse } from './model/fixtures.response.model'
import { StandingsResponse } from './model/standings.response.model'
import { Standing } from '../../domain/model/standing.model'

export class AxiosDataSource implements ApiDataSource {
    axiosInstance: AxiosInstance
    timeZone: string

    constructor(
        baseUrl: string,
        authKey: string
    ) {
        this.timeZone = "America/Lima"
        this.axiosInstance = new AxiosBuilder()
            .withBaseUrl(baseUrl)
            .withAuthorization(authKey)
            .build()
    }

    public async syncMatchesFor(
        date: string
    ): Promise<Match[]> {
        const response = await this.axiosInstance.request<FixturesResponse>({
            url: '/fixtures',
            method: 'GET',
            params: {
                status: "NS",
                timezone: this.timeZone,
                date: date
            }
        })

        return response.data.response
    }

    public async syncStandingsFor(
        league: string,
        season: string
    ): Promise<Standing[][]> {
        const response = await this.axiosInstance.request<StandingsResponse>({
            url: '/standings',
            method: 'GET',
            params: {
                season: season,
                league: league
            }
        })

        return response.data.response[0].league.standings
    }
}
