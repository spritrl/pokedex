import React, { useRef, useEffect, useState } from "react";
import './css/style.css';
import Header from './components/header';
import CardList from "./components/cardList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from './components/details';
import axios from 'axios';

function App() {
  const [listPokemon, setListPokemon] = useState([]);


  const pokemon = {
    id: 0,
    name: '',
    img: '',
    types: [],
  };

  useEffect(() => {
    getPokemon();
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
          newPokemon.name = element.data.name;
          newPokemon.img = element.data.sprites.front_default;
          newPokemon.id = element.data.id;
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CardList listPokemon={listPokemon} />} />
        <Route path="pokemon/:pokemonId" element={<Detail listPokemon={listPokemon} />} />
      </Routes>
    </BrowserRouter>
  );
}
//
export default App;
