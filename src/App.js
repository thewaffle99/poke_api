import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

  const [pokedex,setPokedex] = useState([]);
// This was for the original PokeAPI
//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
//         .then(response => response.json())

//         .then(response => setPokedex(response.results))
// }, []);

useEffect(()=>{
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
      .then(response=>{setPokedex(response.data.results)})
}, []);

  return (
    // This was for the original PokeAPI
    <div className="App">
      {pokedex.length > 0 && pokedex.map((pokedex, index)=>{
                return (<div key={index}>{pokedex.name}</div>)
            })}
    </div>
  );
}

export default App;
