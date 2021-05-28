import {Router} from 'express';

class EjemploRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
    }
}

const ejemploRoutes = new EjemploRoutes();
export default ejemploRoutes.router;
