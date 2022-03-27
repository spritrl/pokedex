import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import CardType from './cardType';

const useStyles = makeStyles({
  card: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 300,
    minWidth: 200,
    height: 300,
    width: '14%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginRight: 20,
    marginBottom: 20,
  },
  cardNumber: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginRight: 'auto',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardName: {
    fontSize: 30,
  },
  cardImage: {
    maxHeight: 150,
    maxWidth: 150,
  },
  listButtonType: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    margin: '50px 10px 10px 30px',
  },
})


const Card = ({ pokemonNumber, pokemonName, pokemonImage, pokemonType }) => {
  const navigate = useNavigate();
  const classes = useStyles()

  return (
    <div className={classes.card} onClick={() => navigate(`/pokemon/${pokemonNumber}`)}>
      <a className={classes.cardNumber}>No.{pokemonNumber}</a>
      <div className={classes.cardContent}>
        <a className={classes.cardName}>{pokemonName}</a>
        <img className={classes.cardImage} src={pokemonImage}></img>
        <div className={classes.listButtonType}>
          {pokemonType.map((elem, i) => <CardType key={i} cardType={elem} />)}
        </div>
      </div>
    </div>
  )
};
export default Card;