import React, { useEffect, useState } from "react";
import './css/style.css';
import Header from './components/header';
import Card from './components/card';
import axios from 'axios';

// result = forms.name
// image = sprites.other.home.front_default
// type = types.type.name
/*

      .then(result => {
        console.log(result)
        result.results.forEach(element => {
          console.log(element.url)
          axios.get(element.url)
            .then(urlRes => {
              const posts = urlRes.data;
              console.log(posts.sprites.other.home.front_default)
            })
        });
      })
*/
function App() {
  let pokemonFinalList = [];
  const [listPokemon, setListPokemon] = useState([]);

  const pokemon = {
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
    await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=300`)
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
    <div className="App">
      <Header />
      <div className='buttonList'>
        {
          listPokemon.map((element, i) =>
            <Card
              pokemonNumber={1}
              pokemonName={element.name}
              pokemonImage={element.img}
              pokemonType={element.types} />
          )
        }
      </div>
    </div>
  );
}

export default App;
