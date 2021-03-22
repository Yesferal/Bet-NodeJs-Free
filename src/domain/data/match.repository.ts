import { Match } from '../model/match.model'
import { ApiDataSource } from '../abstraction/api.dataSource'

export class MatchRepository {
    apiDataSource: ApiDataSource

    constructor(apiDataSource: ApiDataSource) {
        this.apiDataSource = apiDataSource
    }

    public async syncMatchesFor(
        date: string
    ): Promise<Match[]> {
        return this.apiDataSource.syncMatchesFor(date)
    }
}
