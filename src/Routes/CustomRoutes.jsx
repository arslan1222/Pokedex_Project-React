import { Route, Routes } from "react-router-dom";
import Pokedex from "../Components/Pokedex/Pokedex.jsx";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails.jsx";

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:id" element={<PokemonDetails/>} />
        </Routes>
    )
}

export default CustomRoutes;