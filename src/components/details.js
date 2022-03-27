import React, { useRef, useEffect, useState } from "react";
import '../css/style.css';
import { useHistory, useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@material-ui/core'

import Card from './card';

const Detail = ({ listPokemon }) => {
  const navigate = useNavigate();
  const params = useParams()

  const [pokemon, setPokemon] = useState('');
  const getPokemon = () => {
    listPokemon.forEach((element) => {
      if (Number(element.id) === Number(params.pokemonId)) {
        setPokemon(element);
      }
    });
  }

  useEffect(() => {
    getPokemon();
  }, []);


  return (
    <Dialog open={pokemon !== '' ? true : false} onClose={() => navigate('/')}>
      {pokemon && (
        <Card
          key={pokemon.id}
          pokemonNumber={pokemon.id}
          pokemonName={pokemon.name}
          pokemonImage={pokemon.img}
          pokemonType={pokemon.types} />
      )}
    </Dialog >
  )
};
export default Detail;