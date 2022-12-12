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
const meanMedianMode_1 = require("../utilities/meanMedianMode");
const pokemon_1 = require("../services/pokemon");
const getOnePokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Validate Request
    const pokemonName = req.params.name;
    const pokemon = yield (0, pokemon_1.getPokemonByName)(pokemonName);
    if (pokemon !== null) {
        res.send(pokemon);
    }
    else {
        res.sendStatus(404);
    }
});
exports.getOnePokemon = getOnePokemon;
const getPokemonList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Validate Request
    const namesArray = req.query.names.split(',');
    const pokemonList = yield (0, pokemon_1.getPokemon)(namesArray);
    const heights = pokemonList.map(pokemon => pokemon.height);
    const weights = pokemonList.map(pokemon => pokemon.weight);
    // return mean, median, and mode
    const response = {
        pokemon: pokemonList,
        heightStats: {
            mean: (0, meanMedianMode_1.meanFromList)(heights),
            median: (0, meanMedianMode_1.medianFromList)(heights),
            mode: (0, meanMedianMode_1.modeFromList)(heights),
        },
        weightStats: {
            mean: (0, meanMedianMode_1.meanFromList)(weights),
            median: (0, meanMedianMode_1.medianFromList)(weights),
            mode: (0, meanMedianMode_1.modeFromList)(weights),
        }
    };
    res.send(response);
});
exports.getPokemonList = getPokemonList;
//# sourceMappingURL=pokemon.js.map