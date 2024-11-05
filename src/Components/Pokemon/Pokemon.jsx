function Pokemon({name, image, id}){
    return (
        <div>
            <div>{name}</div>
            <div><img src={image}/></div>
            <div>{id}</div>
        </div>
    )
}

export default Pokemon;