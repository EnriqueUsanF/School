"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AlumnoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alumnos = yield database_1.default.query('SELECT * FROM alumno');
            res.json(alumnos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            const alumno = yield database_1.default.query('SELECT * FROM alumno WHERE cuenta = ?', [cuenta]);
            if (alumno.length > 0) {
                return res.json(alumno[0]);
            }
            res.status(404).json({ text: 'El Alumno no Existe.' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO alumno set ?', [req.body]);
            res.json({ message: 'Alumno Guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            yield database_1.default.query('DELETE FROM alumno WHERE cuenta = ?', [cuenta]);
            res.json({ message: 'Alumno Eliminado Correctamente!!!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            const alumno = yield database_1.default.query('update alumno set ? where cuenta = ?', [req.body, cuenta]);
            res.json({ message: 'alumno actualizado' });
        });
    }
}
const alumnoController = new AlumnoController();
exports.default = alumnoController;
