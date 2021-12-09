"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnoController_1 = __importDefault(require("../controllers/alumnoController"));
class AlumnoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', alumnoController_1.default.list);
        this.router.get('/:cuenta', alumnoController_1.default.getOne);
        this.router.post('/', alumnoController_1.default.create);
        this.router.delete('/:cuenta', alumnoController_1.default.delete);
        this.router.put('/:cuenta', alumnoController_1.default.update);
    }
}
const alumnoRoutes = new AlumnoRoutes();
exports.default = alumnoRoutes.router;
