import { request } from 'mithril';

const BASE_URL = 'https://pokeapi.co/api/v2';

const PokeAPI = {
    getPokemon(name) {
        return request(`${BASE_URL}/pokemon/${name}`);
    }
};

export default PokeAPI;