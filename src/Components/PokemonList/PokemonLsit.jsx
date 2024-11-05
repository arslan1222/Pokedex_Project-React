import { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon.jsx";


function PokemonList(){

    const [pokemonList, setpkemonList] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    async function downLoadPokemon(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon"); // Data ko download kar rahe hn
        const pokemonResult = response.data.results;
        console.log(response.data);
        
        const pokemonResultPromise = pokemonResult.map((pokemon)=> axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(pokemonData);
        let result = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        })
        console.log(result);
        setpkemonList(result);

        setIsLoading(false);
    }

    useEffect(()=>{
        downLoadPokemon();
    }, []);
    return (
        <div className="pokemon-list-wrapper">
            <div>Pokemon List</div> 
            {(isLoading) ? "Loading..." : 
                pokemonList.map((p)=>(
                    <Pokemon name={p.name} image={p.image} key={p.id}/>
                ))
            }
        </div>

    )
}

export default PokemonList;