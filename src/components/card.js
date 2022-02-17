import * as React from 'react';
import '../css/style.css';
import CardType from './cardType';

const Card = ({ pokemonNumber, pokemonName, pokemonImage, pokemonType }) => {
  return (
    <div className='card'>
      <a className='cardNumber'>No.{pokemonNumber}</a>
      <div className='cardContent'>
        <a className='cardName'>{pokemonName}</a>
        <img className='cardImage' src={pokemonImage}></img>
        <div className='buttonList'>
          {pokemonType.map((elem, i) => <CardType key={i} cardType={elem} />)}
        </div>
      </div>
    </div>
  )
};
export default Card;