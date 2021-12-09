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
class AsignaturaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asignaturas = yield database_1.default.query('SELECT * FROM asignatura');
            res.json(asignaturas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            const asignatura = yield database_1.default.query('SELECT * FROM asignatura WHERE codigo = ?', [codigo]);
            if (asignatura.length > 0) {
                return res.json(asignatura[0]);
            }
            res.status(404).json({ text: 'La Asignatura no Existe.' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO asignatura set ?', [req.body]);
            res.json({ message: 'Asignatura Guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('DELETE FROM asignatura WHERE codigo = ?', [codigo]);
            res.json({ message: 'Asignatura Eliminada Correctamente!!!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('UPDATE asignatura set ? WHERE codigo = ?', [req.body, codigo]);
            res.json({ message: 'Asignatura Actualizada Correctamente!!!' });
        });
    }
}
const asignaturaController = new AsignaturaController();
exports.default = asignaturaController;
