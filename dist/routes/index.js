"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_1 = __importDefault(require("./pokemon"));
const rootRouter = (0, express_1.Router)();
rootRouter.use(pokemon_1.default);
exports.default = rootRouter;
//# sourceMappingURL=index.js.map