import React, { useState, useEffect } from "react";

function CardCounterPage() {
  const [count, setCount] = useState(0);
  const [runningCount, setRunningCount] = useState(0);
  const [cardsRemaining, setCardsRemaining] = useState(52);
  const [shoes, setShoes] = useState(1);
  const [playerTotal, setPlayerTotal] = useState("");
  const [dealerCard, setDealerCard] = useState("");
  const [action, setAction] = useState("");
  const [trueCount, setTrueCount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setRunningCount(count);
  }, [count]);

  useEffect(() => {
    setCardsRemaining(shoes * 52);
  }, [shoes]);

  useEffect(() => {
    const decksRemaining = cardsRemaining / 52;
    const calculatedTrueCount = Math.round(runningCount / decksRemaining);
    setTrueCount(calculatedTrueCount); 
  }, [runningCount, cardsRemaining]);

  const handleCardClick = (value, card) => {
    setCount((prevCount) => prevCount + value);
    setCardsRemaining((prevCardsRemaining) => prevCardsRemaining - 1);
  
    setHistory((prevHistory) => {
      const newHistory = [card, ...prevHistory];
      if (newHistory.length > 10) {
        newHistory.pop(); // Remove the oldest entry if length exceeds 10
      }
      return newHistory;
    });
  };

  const handleRemoveCard = (index) => {
    const cardToRemove = history[index];
    const valueToRemove = cardValues[cardToRemove.toString()];

    setCount((prevCount) => prevCount - valueToRemove);
    setCardsRemaining((prevCardsRemaining) => prevCardsRemaining + 1);
    
    setHistory((prevHistory) => [
      ...prevHistory.slice(0, index),
      ...prevHistory.slice(index + 1),
    ]);
  };

  const handleShoesChange = (event) => {
    setShoes(event.target.valueAsNumber);
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
      <h1 id="title">Blackjack Card Counter</h1>
      <div className="container">
        <div className="card-button-container">
          {cards.map((card) => (
            <div key={card}>
              <button className="card-counter-button" onClick={() => handleCardClick(cardValues[card.toString()], card)}>
                {card}
              </button>
            </div>
          ))}
        </div>
        <div id="stats">
          <label htmlFor="shoes">Shoes:</label>
          <input
            id="shoes"
            type="number"
            value={shoes}
            onChange={handleShoesChange}
            className="shoes-input"
          />
          <h2>Stats:</h2>
          <p>Cards Remaining: {cardsRemaining}</p>
          <p>Count: {count}</p>
          <p>True Count: {trueCount}</p>
        </div>
      </div>
      <div className="card-history">
  <h2>Card History:</h2>
  <ul>
    {history.map((card, index) => (
      <li key={`${card}-${index}`}>
        {card} 
        <button className="card-history-button" onClick={() => handleRemoveCard(index)}>
          Remove
        </button>
      </li>
    ))}
  </ul>
</div>
      </div>
  );
}

export default CardCounterPage;
