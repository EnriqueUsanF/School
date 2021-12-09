import { Router } from 'express';

import asignaturaController from '../controllers/asignaturaController';

class AsignaturaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', asignaturaController.list);
        this.router.get('/:codigo', asignaturaController.getOne);
        this.router.post('/', asignaturaController.create);
        this.router.delete('/:codigo', asignaturaController.delete);
        this.router.put('/:codigo', asignaturaController.update);
    }

}

const asignaturaRoutes = new AsignaturaRoutes();
export default asignaturaRoutes.router;