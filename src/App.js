import React, { useEffect, useState } from "react";
import './css/style.css';
import Header from './components/header';
import Card from './components/card';
import Json from './pokemons.json'

function App() {
  useEffect(() => {
    const myObject = JSON.parse('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
    console.log(myObject);
  });

  return (
    <div className="App">
      <Header />
      <div className='buttonList'>
        fetch
        <Card
          pokemonNumber={2}
          pokemonName={'LE NOM'}
          pokemonImage={'http://christophe-realini.fr/images/profile.jpg'}
          pokemonType={['bug', 'flying']} />
      </div>
    </div>
  );
}

export default App;
