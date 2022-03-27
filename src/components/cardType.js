import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  buttonColor: {
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 'bold',
    margin: '0px 8px 0px 8px',
    padding: '4px 8px 4px 8px',
    textTransform: 'uppercase',
  },
  buttonType: {
    display: 'flex',
    height: 30,
    width: 80,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
})

const CardType = (cardType) => {
  const getButtonColor = (cardType) => {
    let buttonColor;
    switch (cardType) {
      case 'dragon':
        buttonColor = ('#6F35FC');
        break;
      case 'water':
        buttonColor = ('#6390F0');
        break;
      case 'poison':
        buttonColor = ('#A33EA1');
        break;
      case 'psychic':
        buttonColor = ('#F95587');
        break;
      case 'grass':
        buttonColor = ('#7AC74C');
        break;
      case 'ghost':
        buttonColor = ('#735797');
        break;
      case 'fire':
        buttonColor = ('#EE8130');
        break;
      case 'fairy':
        buttonColor = ('#D685AD');
        break;
      case 'flying':
        buttonColor = ('#A98FF3');
        break;
      case 'fighting':
        buttonColor = ('#C22E28');
        break;
      case 'normal':
        buttonColor = ('#A8A77A');
        break;
      case 'steel':
        buttonColor = ('#B7B7CE');
        break;
      case 'bug':
        buttonColor = ('#A6B91A');
        break;
      case 'ground':
        buttonColor = ('#F7D02C');
        break;
      case 'ice':
        buttonColor = ('#96D9D6');
        break;
      case 'rock':
        buttonColor = ('#B6A136');
        break;
      case 'electric':
        buttonColor = ('rgb(247 208 44)');
        break;
      default:
        buttonColor = ('gray');
        break;
    }
    setButtonColor(buttonColor);
  };

  const [buttonColor, setButtonColor] = useState(0);

  useEffect(() => {
    getButtonColor(cardType.cardType);
  });

  const classes = useStyles()
  return (
    <>
      <div className={classes.buttonType}
        className={classes.buttonColor}
        style={{ backgroundColor: buttonColor }}>
        <a>{cardType.cardType}</a>
      </div>
    </>
  )
};
export default CardType;