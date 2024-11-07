import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import PokemonList from './Components/PokemonList/PokemonList.jsx'
import Search from './Components/Search/Search'
import CustomRoutes from './Routes/CustomRoutes'

function App() {


  return (
    <div className='outer-pokedex'>

      <h1 id="pokedex-heading">
        <Link to="/" className='p-heading'>Pokemon</Link>
      </h1>
      <CustomRoutes />

    </div>
  )
}

export default App
