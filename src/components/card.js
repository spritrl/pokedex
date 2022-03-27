import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import { Select } from '@material-ui/core';
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
  size: {
    fontSize: 15,
    margin: '0px 4px 0px 4px',
  },
  sizeList: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
})


const Card = ({ pokemonNumber, pokemonName, pokemonImage, pokemonType, height, weight, moves }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [movesSetted, setMovesSetted] = React.useState(moves > 0 ? moves[0] : '');

  return (
    <div className={classes.card} onClick={() => navigate(`/pokemon/${pokemonNumber}`)}>
      <a className={classes.cardNumber}>No.{pokemonNumber}</a>
      <div className={classes.cardContent}>
        <a className={classes.cardName}>{pokemonName}</a>
        <img className={classes.cardImage} src={pokemonImage}></img>
        <div className={classes.listButtonType}>
          {pokemonType.map((elem, i) => <CardType key={i} cardType={elem} />)}
        </div>

        {height && weight && (
          <div className={classes.sizeList}>
            <a className={classes.size}>{height * 10} cm</a>
            <a className={classes.size}>-</a>
            <a className={classes.size}>{weight / 10} kg</a>
          </div>
        )}
        {moves && (
          <Select
            native
            variant="outlined"
            value={movesSetted}
            multiple={false}
            onChange={e => setMovesSetted(e.target.value)}
          >
            {moves.map((pokemonMove, index) => (
              <option key={index} name={index}>
                {pokemonMove.move.name}
              </option>
            ))}
          </Select>
        )}
      </div>
    </div>
  )
};
export default Card;