import { AxiosDataSource } from '../../framework/axios/axios.dataSource'
import { ApiDataSource } from '../../data/api.dataSource'

const FOOTBALL_API_BASE_URL = process.env.FOOTBALL_API_BASE_URL || ''
const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY || ''

export class Di {
    private axioDataSource: ApiDataSource | undefined

    getAxioDataSource() {
        return this.axioDataSource || (this.axioDataSource = new AxiosDataSource(FOOTBALL_API_BASE_URL, FOOTBALL_API_KEY))
    }
}
