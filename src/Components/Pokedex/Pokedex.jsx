import Search from "../Search/Search";
import "./Pokedex.css"

function Pokedex(){

    return (
        <div className="pokedex-wrapper">
            <h1 id="pokedex-heading">Pokemon</h1>
            <Search/>
        </div>
    )
}

export default Pokedex;