import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [pokedex,setPokedex] = useState([]);
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
        .then(response => response.json())

        .then(response => setPokedex(response.results))
}, []);

  return (
    <div className="App">
      {pokedex.length > 0 && pokedex.map((pokedex, index)=>{
                return (<div key={index}>{pokedex.name}</div>)
            })}
    </div>
  );
}

export default App;
