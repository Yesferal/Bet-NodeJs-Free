import { Match } from '../../domain/model/match.model'
import { Standing } from '../../domain/model/standing.model'

export interface ApiDataSource {
    syncMatchesFor(
        date: string
    ): Promise<Match[]>

    syncStandingsFor(
        league: string,
        season: string
    ): Promise<Standing[][]>
}
