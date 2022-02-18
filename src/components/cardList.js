import React, { useEffect, useState } from "react";
import '../css/style.css';
import Card from './card';
import axios from 'axios';

const CardList = () => {
  let pokemonFinalList = [];
  const [listPokemon, setListPokemon] = useState([]);

  const pokemon = {
    id: 0,
    name: '',
    img: '',
    types: [],
  };

  useEffect(() => {
    getPokemon();
    console.log('pokemonFinalListclijiojp', pokemonFinalList);
  }, []);

  const getPokemon = async () => {
    let pokemonListUrls = [];
    await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`)
      .then(res => {
        const posts = res.data;
        return posts;
      })
      .then(result => {
        result.results.forEach((element, i) => {
          pokemonListUrls.push(element.url);
        });
      })
      .then(() => {
        return Promise.all(pokemonListUrls.map((element) => {
          return axios.get(element)

        }))
      })
      .then(res => {
        let tempList = [];

        res.forEach((element) => {
          let newPokemon = Object.create(pokemon);
          console.log(element)
          newPokemon.name = element.data.name;
          newPokemon.img = element.data.sprites.front_default;
          newPokemon.id = element.data.id;
          console.log(newPokemon.id.toString().length)
          let arr = [];
          element.data.types.forEach((element) => {
            arr.push(element.type.name);
          })
          newPokemon.types = arr;
          tempList.push(newPokemon)
        })
        setListPokemon(tempList);
      })
  }

  return (
    <div className='cardList'>
      {
        listPokemon.map((element, i) =>
          <Card
            pokemonNumber={element.id}
            pokemonName={element.name}
            pokemonImage={element.img}
            pokemonType={element.types} />
        )
      }
    </div>
  )
};
export default CardList;