import express, { Express, Request, Response } from 'express'

export class ServerBuilder {
    betApp: Express
    port: string | undefined

    constructor() {
        this.betApp = express()
    }

    public withPort(
        port: string
    ): ServerBuilder {
        this.port = port

        return this
    }

    public register(
        param: string,
        func: (request: Request, response: Response) => Promise<void>
    ): ServerBuilder {
        this.betApp.get(param, func)

        return this
    }

    public build(): Express {
        this.betApp.use(express.json())
        this.betApp.listen(this.port, () => {
            console.log(`Listening on port http://localhost:${this.port}`)
        })

        return this.betApp
    }
}
