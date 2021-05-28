"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class EjemploRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
    }
}
const ejemploRoutes = new EjemploRoutes();
exports.default = ejemploRoutes.router;
