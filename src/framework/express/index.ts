import express, { Request, Response } from 'express';

export class BetExpressApp {
    app = express()

    constructor() {
        this.app.use(express.json())
    }

    public register(
        param: string, 
        func: (request: Request, response: Response) => Promise<void>
    ) {
        this.app.get(param, func)
    }
    
    public listen(port: string) {
        this.app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    }
}
