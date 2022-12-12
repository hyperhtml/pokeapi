import axios from 'axios';
import { Pokemon } from "../models/pokemon"

export const getPokemonByName = async (name: string) => {
    let pokemon = null;
    try {
        // TODO: Add caching to api call.
        const {data, status} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);

        // TODO: Pass generalized errors to callee
        if (status == 200){
            pokemon = <Pokemon>{name: data.name, height: data.height, weight: data.weight}
        }
    } catch (error) {
        // TODO: Generalize Axios errors
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
        } else {
            console.log('unexpected error: ', error);
        }
    } finally {
        return pokemon
    }
}

interface PokemonListResponse {
    results: Pokemon[],
}

export const getPokemon = async (names: string[]) => {
    const results = await Promise.allSettled(names.map(name => {
        return getPokemonByName(name);
    }))

    // Assuming all succeeded
    const fulfilled = results.filter(result => result.status === 'fulfilled' && result.value != null) as PromiseFulfilledResult<Pokemon>[]
    const pokemonList = fulfilled.map((response)=>response.value)

    return pokemonList
}
