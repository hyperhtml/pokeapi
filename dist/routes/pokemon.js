"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_1 = require("../controllers/pokemon");
const pokemonRouter = (0, express_1.Router)();
pokemonRouter.get('/pokemon', pokemon_1.getPokemonList);
pokemonRouter.get('/pokemon/:name', pokemon_1.getOnePokemon);
exports.default = pokemonRouter;
//# sourceMappingURL=pokemon.js.map