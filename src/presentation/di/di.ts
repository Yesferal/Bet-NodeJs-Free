import { AxiosDataSource } from '../../framework/axios/axios.dataSource'
import { ApiDataSource } from '../../domain/abstraction/api.dataSource'
import { MatchRepository } from '../../domain/data/match.repository'
import { StandingRepository } from '../../domain/data/standing.repository'

const FOOTBALL_API_BASE_URL = process.env.FOOTBALL_API_BASE_URL || ''
const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY || ''

export class Di {
    private axioDataSource: ApiDataSource | undefined
    private matchRepository: MatchRepository | undefined
    private standingRepository: StandingRepository | undefined

    private getAxioDataSource() {
        return this.axioDataSource || (this.axioDataSource = new AxiosDataSource(FOOTBALL_API_BASE_URL, FOOTBALL_API_KEY))
    }

    getMatchRepository() {
        return this.matchRepository || (this.matchRepository = new MatchRepository(this.getAxioDataSource()))
    }

    getStadingRepository() {
        return this.standingRepository || (this.standingRepository = new StandingRepository(this.getAxioDataSource()))
    }
}
