import React, { useEffect, useState } from "react";
import '../css/style.css';

const CardType = (cardType) => {
  const [buttonColor, setButtonColor] = useState(0);

  useEffect(() => {
    console.log(cardType.cardType)
    getButtonColor(cardType.cardType);
  });

  const getButtonColor = (cardType) => {
    switch (cardType) {
      case 'water':
        setButtonColor('rgb(107 146 232)');
        break;
      case 'poison':
        setButtonColor('rgb(150 72 157)');
        break;
      case 'grass':
        setButtonColor('rgb(140 195 94)');
        break;
      case 'fire':
        setButtonColor('rgb(225 134 68)');
        break;
      case 'normal':
        setButtonColor('rgb(168 167 127)');
        break;
      case 'flying':
        setButtonColor('rgb(164 147 237)');
        break;
      case 'bug':
        setButtonColor('rgb(169 183 64)');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="buttonType" style={{
        backgroundColor: buttonColor,
      }}>
        <a style={{
          margin: 'auto'
        }}>{cardType.cardType}</a>
      </div>
    </>
  )
};
export default CardType;