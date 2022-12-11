import {Router, Request, Response} from 'express';
import { getOnePokemon, getPokemonList } from '../controllers/pokemon';

const pokemonRouter = Router();

pokemonRouter.get('/pokemon', getPokemonList);
pokemonRouter.get('/pokemon/:name', getOnePokemon);

export default pokemonRouter;