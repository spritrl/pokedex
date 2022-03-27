import React, { useState } from "react";
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Card from './card';

const useStyles = makeStyles({
  searchBarContent: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cardList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    margin: '50px 10px 10px 30px',
  },
  searchBarTextField: {
    width: '90%',
    backgroundColor: 'rgba(63, 63, 63, 0.459)',
  },
})

const CardList = ({ listPokemon }) => {
  const classes = useStyles()
  const [textFieldValue, setTextFielValue] = useState('');

  return (
    <>
      <div className={classes.searchBarContent}>
        <TextField
          placeholder='Search a Pokemon'
          className={classes.searchBarTextField}
          value={textFieldValue}
          onChange={(e) => setTextFielValue(e.target.value)}
        />
      </div>
      <div className={classes.cardList}>
        {
          listPokemon.map((element) => {
            if (element.name.includes(textFieldValue)) {
              return (
                <Card
                  key={element.id}
                  pokemonNumber={element.id}
                  pokemonName={element.name}
                  pokemonImage={element.img}
                  pokemonType={element.types} />

              )
            }
          })
        }
      </div>
    </>
  )
};
export default CardList;