import { Request, Response } from 'express';

import pool from '../database';

class AlumnoController {

    public async list(req: Request, res: Response) {
        const alumnos = await pool.query('SELECT * FROM alumno');
        res.json(alumnos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { cuenta } = req.params;
        const alumno = await pool.query('SELECT * FROM alumno WHERE cuenta = ?', [ cuenta ]);
        if (alumno.length > 0) {
            return res.json(alumno[0]);
        }
        res.status(404).json({ text: 'El Alumno no Existe.' });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO alumno set ?', [ req.body ]);
        res.json({ message: 'Alumno Guardado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { cuenta } = req.params;
        await pool.query('DELETE FROM alumno WHERE cuenta = ?', [ cuenta ]);
        res.json({ message: 'Alumno Eliminado Correctamente!!!' });
    }

    public async update(req: Request,res: Response): Promise<void>{
        const { cuenta } = req.params;
        const alumno = await pool.query('update alumno set ? where cuenta = ?', [req.body, cuenta]);
        res.json({message: 'alumno actualizado'});
    }

}

const alumnoController = new AlumnoController();
export default alumnoController;