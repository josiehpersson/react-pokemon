import React from 'react';
import PokemonCard from './PokemonCard';
import {Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly'
}
}))

const PokemonCardList = ({pokedexData, fetchPokedexData}) => {
const classes = useStyles();
    return pokedexData.length > 0 ? (
        <Paper elevation={3} className={classes.container}>
            {pokedexData.map((pokemon) => {
                return(
                    <PokemonCard key={pokemon.name} pokemon={pokemon} fetchPokedexData={fetchPokedexData} />
                )
            })}
        </Paper>
    ) : null;
}

export default PokemonCardList;