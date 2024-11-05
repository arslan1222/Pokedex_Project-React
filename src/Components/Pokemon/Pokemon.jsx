import "./Pokemon.css";
function Pokemon({name, image, id}){
    return (
        <div className="pokemon">
            <div className="pokemon-name">{name}</div>
            <div><img src={image} className="pokemon-img"/></div>
            <div>{id}</div>
        </div>
    )
}

export default Pokemon;