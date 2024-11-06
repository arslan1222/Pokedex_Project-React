import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

function PokemonDetails(){
    let { id } = useParams();
    console.log(id);

    const [pokemon, setPokemon] = useState({});
    
    async function downloadPokemon(){
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                height: response.data.height,
                weight: response.data.weight,
                types: response.data.types.map((t) => t.type.name)
            });
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    }

    useEffect(() => {
        downloadPokemon();
    }, [id]);

    return (
        <div className="pokemon-details-wrapper">
            <div className="pokemon-details-image">
                {pokemon.image && <img src={pokemon.image} alt={pokemon.name} />}
            </div>
            <div className="pokemon-details-name">Name: <span>{pokemon.name}</span></div>
            <div className="pokemon-details-height">Height: {pokemon.height}</div>
            <div className="pokemon-details-weight">Weight: {pokemon.weight}</div>
            <div className="pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>
        </div>
    );
}

export default PokemonDetails;
