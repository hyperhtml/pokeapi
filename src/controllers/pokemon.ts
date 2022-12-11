import e, { Request, Response } from 'express';
import { pick } from '../utilities/pick';
import { Pokemon } from '../models/pokemon';
import { getPokemon, getPokemonByName } from '../services/pokemon';

export const getOnePokemon = async (req: Request<{name: string}>, res: Response) => {
    // TODO: Validate Request
    const pokemonName: string = req.params.name;

    const pokemon = await getPokemonByName(pokemonName)

    res.send(pokemon);
}

export const getPokemonList = async (_req: Request, res: Response)=> {
    const pokemonList = await getPokemon();

    res.send(pokemonList)
}