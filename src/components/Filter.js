import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import React from "react";

const pokemonTypes = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

const Filter = ({
  pokemonTypeFilter,
  setPokemonTypeFilter,
  capturedFilter,
  setCapturedFilter,
}) => {
  const handlePokemonTypeChange = (e) => {
    setPokemonTypeFilter(e.target.value);
  };
  const handleCapturedChange = (e) => {
    setCapturedFilter(e.target.value);
  };
  return (
    <Paper variant="outlined">
      <FormControl variant="outlined">
        <InputLabel>Type</InputLabel>
        <Select
          value={pokemonTypeFilter}
          onChange={handlePokemonTypeChange}
          label="Type"
        >
          <MenuItem value="Any">Any</MenuItem>
          {pokemonTypes.map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel>Captured</InputLabel>
        <Select
          value={capturedFilter}
          onChange={handleCapturedChange}
          label="Captured"
        >
          <MenuItem value="Any">Any</MenuItem>
          <MenuItem value="Captured">Captured</MenuItem>
          <MenuItem value="Not Captured">Not Captured</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};
export default Filter;
