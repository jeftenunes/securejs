import * as express from 'express';
import { IndexRoute } from './routes/index';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.routes();
    }

    routes(): void {
        const router = express.Router();
        IndexRoute.create(router);

        this.express.use('/api', router);
    }
}

export default new App().express;