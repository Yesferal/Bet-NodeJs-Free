import { Standing } from '../../../domain/model/standing.model'

export type StandingsResponse = {
    response: Tournament[]
}

type Tournament = {
    league: League
}

type League = {
    standings: Standing[][]
}
