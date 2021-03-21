import axios, { AxiosInstance } from 'axios'

export class AxiosBuilder {
    timeZone: string | undefined
    baseUrl: string | undefined
    authKey: string | undefined

    withBaseUrl(
        baseUrl: string
    ): AxiosBuilder {
        this.baseUrl = baseUrl

        return this
    }

    withAuthorization(
        key: string
    ): AxiosBuilder {
        this.authKey = key

        return this
    }

    build(): AxiosInstance {
        return axios.create({
            baseURL: this.baseUrl,
            headers: {
                'x-rapidapi-key': this.authKey
            }
        })
    }
}
