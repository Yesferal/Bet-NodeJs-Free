import axios, { AxiosInstance } from 'axios'
import { Fixtures, Match } from './model/fixtures.model'

export class AxiosDataSource {
    timezone: string
    axiosInstance: AxiosInstance

    constructor(
        baseUrl: string,
        apiKey: string
    ) {
        this.timezone = "America/Lima"
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: {
              'x-rapidapi-key': apiKey
            }
        })
    }

    public async syncFixturesFor(
        date: String
    ) : Promise<Match[]> {
        const fixtures = await this.axiosInstance.request<Fixtures>({
            url: '/fixtures',
            method: 'GET',
            params: {
                status: "NS",
                timezone: this.timezone,
                date: date
            }
        })

        return fixtures.data.response;
    }
}
