import { Standing } from '../model/standing.model'
import { ApiDataSource } from '../abstraction/api.dataSource'

export class StandingRepository {
    apiDataSource: ApiDataSource

    constructor(apiDataSource: ApiDataSource) {
        this.apiDataSource = apiDataSource
    }

    public async syncStandingsFor(
        league: string,
        season: string
    ): Promise<Standing[][]> {
        return this.apiDataSource.syncStandingsFor(league, season)
    }
}
