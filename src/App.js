import React, { useCallback, useEffect, useState } from "react";
import PokemonCardList from "./components/PokemonCardList";
import Filter from './components/Filter';
import PokemonCardsList from './components/PokemonCardList';
import {fetchPokemon} from './utils/graphUtils';

function App() {
  const [pokedexData, setPokedexData] = useState([]);
  const [pokemonTypeFilter, setPokemonTypeFilter] = useState('Any');
  const [capturedFilter, setCapturedFilter] = useState('Any');

  const fetchPokedexData = useCallback(async () => {
    const {errors, data} = await fetchPokemon({
      pokemonType: pokemonTypeFilter,
      isCaptured: capturedFilter,
    })
    if(errors) {
      console.error(errors);
    }
    const result = data.queryPokemon.sort(
      (pokemonA, pokemonB) => pokemonA.id - pokemonB.id
    )
    setPokedexData(result)
  }, [pokemonTypeFilter, capturedFilter]);

  useEffect(() => {
    fetchPokedexData();
    console.log(pokedexData)
  }, []);

  useEffect(() => {
    fetchPokedexData();
    console.log(pokedexData)
  }, [pokemonTypeFilter, capturedFilter])

  return (
    <div className="App">
      <Filter pokemonTypeFilter={pokemonTypeFilter} setPokemonTypeFilter={setPokemonTypeFilter} capturedFilter={capturedFilter} setCapturedFilter={setCapturedFilter} />
      <PokemonCardList pokedexData={pokedexData} fetchPokedexData={fetchPokedexData} />
    </div>
  );
}

export default App;
