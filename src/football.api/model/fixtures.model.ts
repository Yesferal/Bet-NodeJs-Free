export type Fixtures = {
    response: Match[]
}

export type Match = {
    teams: Teams
}

type Teams = {
    home: Team,
    away: Team
}

type Team = {
    id: number,
    name: String
}
