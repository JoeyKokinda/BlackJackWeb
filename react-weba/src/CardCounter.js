import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';

function CardCounterPage() {
  const [count, setCount] = useState(0);
  const [runningCount, setRunningCount] = useState(0);
  const [cardsRemaining, setCardsRemaining] = useState(52);
  const [shoes, setShoes] = useState(1);
  const [playerTotal, setPlayerTotal] = useState("");
  const [dealerCard, setDealerCard] = useState("");
  const [action, setAction] = useState("");

  const handleCardClick = (value) => {
    setCount((prevCount) => prevCount + value);
    setRunningCount((prevCount) => (prevCount + value) / shoes);
    setCardsRemaining((prevCardsRemaining) => prevCardsRemaining - 1);
  };

  const handleShoesChange = (event) => {
    const newShoes = event.target.value;
    setShoes(newShoes);
    setCardsRemaining(newShoes * 52);
    setRunningCount(count / newShoes);
  };

  const handlePlayerTotalChange = (event) => {
    setPlayerTotal(event.target.value);
  };

  const handleDealerCardChange = (event) => {
    setDealerCard(event.target.value);
  };

  const getAdvice = () => {
    return "Advice: Stand";
  };

  const calculateResult = (event) => {
    event.preventDefault();

    const parsedPlayerTotal = parseInt(playerTotal);
    const parsedDealerCard = parseInt(dealerCard);

    if (parsedPlayerTotal >= 17) {
      setAction("Stand");
    } else if (parsedPlayerTotal <= 11) {
      if (parsedPlayerTotal === 11 && parsedDealerCard !== 1) {
        setAction("Double if allowed, otherwise Hit");
      } else {
        setAction("Hit");
      }
    } else {
      if (parsedDealerCard >= 7 || parsedDealerCard === 1) {
        setAction("Hit");
      } else {
        setAction("Stand");
      }
    }
  };

  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const cardValues = {
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 0,
    8: 0,
    9: 0,
    10: -1,
    J: -1,
    Q: -1,
    K: -1,
    A: -1,
  };

  return (
    <div className="card-counter">
      <h1>Card Counter</h1>
      <p>Count: {count}</p>
      <p>Running Count: {runningCount}</p>
      <p>Cards Remaining: {cardsRemaining}</p>
      <p>Your action: {action}</p>
      <form>
        <div>
          <label>
            Shoes:
            <input
              type="number"
              value={shoes}
              onChange={handleShoesChange}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Your Total:
            <input
              type="number"
              value={playerTotal}
              onChange={handlePlayerTotalChange}
              className="player-input-box"
            />
          </label>
          <label>
            Dealer's Card:
            <input
              type="number"
              value={dealerCard}
              onChange={handleDealerCardChange}
              className="dealer-input-box"
            />
          </label>
        </div>
      <div className="calc-button">
        <label>
        <button 
        Calculate
        onClick={calculateResult}
        className="calculate-button"
       />
       </label>
      </div>
      </form>
      
        <div className="card-button-container">
          {cards.map((card) => (
            <button
              key={card}
              onClick={() => handleCardClick(cardValues[card.toString()])}
              className="card-button"
            >
              {card}
            </button>
          ))}
        </div>
        
    </div>
  );
}
export default CardCounterPage;
