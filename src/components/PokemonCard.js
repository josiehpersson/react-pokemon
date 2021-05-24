import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Switch,
  Typography,
  makeStyles,
  Tooltip,
  FormControlLabel,
} from "@material-ui/core";
import { updatePokemonCapturedStatus } from "../utils/graphUtils";

const useStyles = makeStyles(() => ({
    container: {
        width: 300,
        height: 400,
        margin: 5,
    },
    content: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'inherit'
    },
    action: {
        height: '95%'
    },
    img: {
        maxWidth: 200,
        maxHeight: 200,
        margin: 10
    },
    types: {
        border: '1px solid black',
        borderRadius: 10,
        padding: 6,
        textAlign: 'center',
        marginBottom: 10,
    }
}))
const PokemonCard = ({ pokemon, fetchPokedexData }) => {
    const classes = useStyles();
  const handleCapturedChange = async () => {
    const { errors } = await updatePokemonCapturedStatus(
      pokemon.id,
      !pokemon.captured
    );
    if (errors) {
      console.error(errors);
    }
    fetchPokedexData();
  };

  return (
    <Card className={classes.container}>
      <CardActionArea className={classes.action}>
        <CardContent className={classes.content}>
          <Typography variant="h5">{pokemon.name}</Typography>
          <img alt={pokemon.name} src={pokemon.imgUrl} className={classes.img}/>
          <Tooltip title="Pokemon type">
          <Typography variant="h6"className={classes.types}>
            {pokemon.pokemonTypes.join(", ")}
          </Typography>
          </Tooltip>
          <Typography variant="body1">
            Captured: {pokemon.captured ? "Yes" : "No"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
