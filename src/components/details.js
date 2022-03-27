import React, { useRef, useEffect, useState } from "react";
import '../css/style.css';
import { useHistory, useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@material-ui/core'
import axios from 'axios';

import Card from './card';

const Detail = ({ listPokemon }) => {
  const navigate = useNavigate();
  const params = useParams()

  const [pokemon, setPokemon] = useState('');
  const [weight, setWeight] = useState('0');
  const [height, setHeight] = useState('0');
  const [moves, setMoves] = useState([]);
  const getPokemon = () => {
    listPokemon.forEach((element) => {
      if (Number(element.id) === Number(params.pokemonId)) {
        setPokemon(element);
      }
    });
  }

  const getOnlinePokemon = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
      .then(res => {
        const posts = res.data;
        setHeight(posts.height);
        setWeight(posts.weight);
        setMoves(posts.moves);
      })
  };

  useEffect(() => {
    getPokemon();
    getOnlinePokemon();
  }, []);


  return (
    <Dialog open={pokemon !== '' ? true : false} onClose={() => navigate('/')}>
      {pokemon && (
        <Card
          key={pokemon.id}
          pokemonNumber={pokemon.id}
          pokemonName={pokemon.name}
          pokemonImage={pokemon.img}
          height={height}
          weight={weight}
          moves={moves}
          pokemonType={pokemon.types} />
      )}
    </Dialog >
  )
};
export default Detail;