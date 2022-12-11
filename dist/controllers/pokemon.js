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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonList = exports.getOnePokemon = void 0;
const pokemon_1 = require("../services/pokemon");
const getOnePokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Validate Request
    const pokemonName = req.params.name;
    const pokemon = yield (0, pokemon_1.getPokemonByName)(pokemonName);
    res.send(pokemon);
});
exports.getOnePokemon = getOnePokemon;
const getPokemonList = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonList = yield (0, pokemon_1.getPokemon)();
    res.send(pokemonList);
});
exports.getPokemonList = getPokemonList;
//# sourceMappingURL=pokemon.js.map