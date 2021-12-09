"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignaturaController_1 = __importDefault(require("../controllers/asignaturaController"));
class AsignaturaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asignaturaController_1.default.list);
        this.router.get('/:codigo', asignaturaController_1.default.getOne);
        this.router.post('/', asignaturaController_1.default.create);
        this.router.delete('/:codigo', asignaturaController_1.default.delete);
        this.router.put('/:codigo', asignaturaController_1.default.update);
    }
}
const asignaturaRoutes = new AsignaturaRoutes();
exports.default = asignaturaRoutes.router;
