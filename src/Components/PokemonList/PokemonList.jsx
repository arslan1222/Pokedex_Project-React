import { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon.jsx";

function PokemonList() {
    let [pokemonListState, setPokemonListState] = useState({
        pokemonList: false,
        isLoading: true,
        pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
        nextUrl: "",
        prevUrl: ""
    });

    async function downLoadPokemon() {
        setPokemonListState((state)=>({ ...state, isLoading: true }));
        const response = await axios.get(pokemonListState.pokedexUrl);
        const pokemonResult = response.data.results;

        setPokemonListState((state)=>({
            ...state,
            prevUrl: response.data.previous,
            nextUrl: response.data.next
        }));
        
        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        
        const result = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            };
        });
        
        setPokemonListState((state)=>({
            ...state,
            pokemonList: result,
            isLoading: false
        }));
    }

    useEffect(() => {
        downLoadPokemon();
    }, [pokemonListState.pokedexUrl]);

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-list">Pokemon List</div>
            <div className="pokemon-wrapper">
                {pokemonListState.isLoading ? "Loading..." : 
                    pokemonListState.pokemonList.map((p) => (
                        <Pokemon name={p.name} image={p.image} id={p.id} key={p.id} />
                    ))
                }
            </div>
            <div className="controls">
                <button
                    disabled={!pokemonListState.prevUrl}
                    onClick={() =>
                        setPokemonListState({
                            ...pokemonListState,
                            pokedexUrl: pokemonListState.prevUrl
                        })
                    }
                >
                    Previous
                </button>
                <button
                    disabled={!pokemonListState.nextUrl}
                    onClick={() =>
                        setPokemonListState({
                            ...pokemonListState,
                            pokedexUrl: pokemonListState.nextUrl
                        })
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default PokemonList;
