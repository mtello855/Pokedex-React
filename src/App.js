import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Poke from "./Poke";

function App() {
  const [poke, setPoke] = useState({});

  async function fetchData(e) {
    const pokemon = e.target.elements.name.value.toLowerCase();
    e.preventDefault();
    const apiData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) => data);
    console.log(apiData);
    setPoke({
      name: apiData.name,
      id: apiData.id,
      moves: {
        move1: apiData.moves[0].move.name,
        move2: apiData.moves[1].move.name,
        move3: apiData.moves[2].move.name,
        move4: apiData.moves[3].move.name,
      },
      sprites: apiData.sprites,
      types: apiData.types[0].type.name,
      stats: {
        stat1: apiData.stats[0].stat.name,
        stat1b: apiData.stats[0].base_stat,
        stat2: apiData.stats[1].stat.name,
        stat2b: apiData.stats[1].base_stat,
        stat3: apiData.stats[2].stat.name,
        stat3b: apiData.stats[2].base_stat,
        stat4: apiData.stats[3].stat.name,
        stat4b: apiData.stats[3].base_stat,
        stat5: apiData.stats[4].stat.name,
        stat5b: apiData.stats[4].base_stat,
        stat6: apiData.stats[5].stat.name,
        stat6b: apiData.stats[5].base_stat,
      },
      error: "",
    });
    console.log(apiData);
  }

  return (
    <div className="App">
      <div className="form-search">
        <Form getPoke={fetchData} />
      </div>
      <Poke
        name={poke.name}
        moves={poke.moves}
        sprites={poke.sprites}
        id={poke.id}
        types={poke.types}
        stats={poke.stats}
      />
    </div>
  );
}

export default App;
