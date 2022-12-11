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

export const getPokemon = async () => {
    try {
        const response = await axios.get<Pokemon[]>(`https://pokeapi.co/api/v2/pokemon`);

        console.log(response);

        // TODO: Handle error or non existant pokemon
        if (response.status == 200){
            console.log(response.data.length)
            return response.data.map<Pokemon>(pokemon => ({name: pokemon.name, height: pokemon.height, weight: pokemon.weight}))
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
