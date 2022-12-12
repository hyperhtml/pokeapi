import { Request, Response } from 'express';
import { Pokemon } from '../models/pokemon';
import { meanFromList, medianFromList, modeFromList } from '../utilities/meanMedianMode';
import { getPokemon, getPokemonByName } from '../services/pokemon';

export const getOnePokemon = async (req: Request<{name: string}>, res: Response) => {
    // TODO: Validate Request
    const pokemonName: string = req.params.name;
    const pokemon = await getPokemonByName(pokemonName);

    if(pokemon !== null){
        res.send(pokemon);
    } else {
        res.sendStatus(404);
    }
}

interface RequestQuery {
    names: string;
}

interface pokemonStats {
    mean: number;
    median: number;
    mode: number | null;
}
interface PokemonResponse {
    pokemon: Pokemon[];
    heightStats: pokemonStats;
    weightStats: pokemonStats;
}
export const getPokemonList = async (req: Request<{},{},{},{names: string;}>, res: Response)=> {
    // TODO: Validate Request
    const namesArray = req.query.names.split(',');

    const pokemonList = await getPokemon(namesArray);
    
    const heights = pokemonList.map(pokemon => pokemon.height);
    const weights = pokemonList.map(pokemon => pokemon.weight);

    // return mean, median, and mode
    const response: PokemonResponse = {
        pokemon: pokemonList,
        heightStats: {
            mean: meanFromList(heights),
            median: medianFromList(heights),
            mode: modeFromList(heights),
        },
        weightStats: {
            mean: meanFromList(weights),
            median: medianFromList(weights),
            mode: modeFromList(weights),
        }
    }

    res.send(response)
}