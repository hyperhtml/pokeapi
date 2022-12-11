import axios from 'axios';
import { Pokemon } from "../models/pokemon"

export const getPokemonByName = async (name: string) => {
    try {
        const {data, status} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);

        // TODO: Handle error or non existant pokemon
        if (status == 200){
            return<Pokemon>{name: data.name, height: data.height, weight: data.weight} ;
        } else {
            // Error getting
            return null
        }
    } catch (error) {
        // TODO: Generalize Axios errors
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return null
        } else {
            console.log('unexpected error: ', error);
            return null
        }
    }
}

interface PokemonListResponse {
    results: Pokemon[],
}

export const getPokemon = async (names: string[]) => {
    const results = await Promise.allSettled(names.map(name => {
        return getPokemonByName(name);
    }))

    // Assume all succeeded
    const fulfilled = results.filter(result => result.status === 'fulfilled') as PromiseFulfilledResult<Pokemon>[]
    const pokemonList = fulfilled.map((response)=>response.value)

    return pokemonList
}
