import { Team } from './team.model'

export type Match = {
    teams: Teams
}

type Teams = {
    home: Team,
    away: Team
}
