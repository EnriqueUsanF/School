import { indexController } from './indexController';
import { Request, Response } from 'express';

import pool from '../database';

class AsignaturaController {

    public async list(req: Request, res: Response) {
        const asignaturas = await pool.query('SELECT * FROM asignatura');
        res.json(asignaturas);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { codigo } = req.params;
        const asignatura = await pool.query('SELECT * FROM asignatura WHERE codigo = ?', [ codigo ]);
        if (asignatura.length > 0) {
            return res.json(asignatura[0]);
        }
        res.status(404).json({ text: 'La Asignatura no Existe.' });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO asignatura set ?', [ req.body ]);
        res.json({ message: 'Asignatura Guardada' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { codigo } = req.params;
        await pool.query('DELETE FROM asignatura WHERE codigo = ?', [ codigo ]);
        res.json({ message: 'Asignatura Eliminada Correctamente!!!' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { codigo } = req.params;
        await pool.query('UPDATE asignatura set ? WHERE codigo = ?', [ req.body, codigo ]);
        res.json({ message: 'Asignatura Actualizada Correctamente!!!' });
    }

}

const asignaturaController = new AsignaturaController();
export default asignaturaController;