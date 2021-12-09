import { Router } from 'express';

import alumnoController from '../controllers/alumnoController';

class AlumnoRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', alumnoController.list);
        this.router.get('/:cuenta', alumnoController.getOne);
        this.router.post('/', alumnoController.create);
        this.router.delete('/:cuenta', alumnoController.delete);
        this.router.put('/:cuenta', alumnoController.update);
    }

}

const alumnoRoutes = new AlumnoRoutes();
export default alumnoRoutes.router;