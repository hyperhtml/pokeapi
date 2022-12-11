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
exports.getPokemon = exports.getPokemonByName = void 0;
const axios_1 = __importDefault(require("axios"));
const getPokemonByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, status } = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        // TODO: Handle error or non existant pokemon
        if (status == 200) {
            return { name: data.name, height: data.height, weight: data.weight };
        }
        else {
            // Error getting
            return null;
        }
    }
    catch (error) {
        // TODO: Generalize Axios errors
        if (axios_1.default.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return null;
        }
        else {
            console.log('unexpected error: ', error);
            return null;
        }
    }
});
exports.getPokemonByName = getPokemonByName;
const getPokemon = (names) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield Promise.allSettled(names.map(name => {
        return (0, exports.getPokemonByName)(name);
    }));
    // Assume all succeeded
    const fulfilled = results.filter(result => result.status === 'fulfilled');
    const pokemonList = fulfilled.map((response) => response.value);
    return pokemonList;
});
exports.getPokemon = getPokemon;
//# sourceMappingURL=pokemon.js.map