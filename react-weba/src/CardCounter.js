import React from "react";

class CardCounterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      runningCount: 0,
      shoes: 1,
      cardsRemaining: 52,
      playerTotal: "",
      dealerCard: "",
    };
  }

  handleCardClick = (value) => {
    this.setState((prevState) => {
      const newCount = prevState.count + value;
      return {
        count: newCount,
        runningCount: newCount / prevState.shoes,
        cardsRemaining: prevState.cardsRemaining - 1,
      };
    });
  };

  handleShoesChange = (event) => {
    this.setState((prevState) => {
      const newShoes = event.target.value;
      return {
        shoes: newShoes,
        cardsRemaining: newShoes * 52,
        runningCount: prevState.count / newShoes,
      };
    });
  };

  handlePlayerTotalChange = (event) => {
    this.setState({ playerTotal: event.target.value });
  };

  handleDealerCardChange = (event) => {
    this.setState({ dealerCard: event.target.value });
  };

  getAdvice = () => {
    // Add your basic strategy logic here
    // For now, we'll just return a placeholder
    return "Advice: Stand";
  };
 
  calculateResult = (event) => {
    event.preventDefault();
    alert(this.getAdvice());
}
  calculateResult = () => {
    const playerTotal = parseInt(this.state.playerTotal);
    const dealerCard = parseInt(this.state.dealerCard);
  
    if (playerTotal >= 17) {
      return "Stand";
    } else if (playerTotal <= 11) {
      if (playerTotal === 11 && dealerCard !== 1) {
        return "Double if allowed, otherwise Hit";
      }
      return "Hit";
    } else { // Player total is between 12 and 16
      if (dealerCard >= 7 || dealerCard === 1) {
        return "Hit";
      } else {
        return "Stand";
      }
    }
    
  };
   

render() {
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

    const calculateResult = () => {
        const playerTotal = parseInt(this.state.playerTotal);
        const dealerCard = parseInt(this.state.dealerCard);

        if (playerTotal >= 17) {
            return "Stand";
        } else if (playerTotal <= 11) {
            return "Hit";
        } else {
            if (dealerCard >= 7) {
                return "Hit";
            } else {
                return "Stand";
            }
        }
    };

    return (
        <div className="card-counter">
            <h1>Card Counter</h1>
            <p>Count: {this.state.count}</p>
            <p>Running Count: {this.state.runningCount}</p>
            <p>Cards Remaining: {this.state.cardsRemaining}</p>
            <form>
                <div>
                    <label>
                        Shoes:
                        <input
                            type="number"
                            value={this.state.shoes}
                            onChange={this.handleShoesChange}
                        />
                    </label>
                </div>
                <div className="input-container">
                    <label>
                        Your Total:
                        <input
                            type="number"
                            value={this.state.playerTotal}
                            onChange={this.handlePlayerTotalChange}
                        />
                    </label>
                    <label>
                        Dealer's Card:
                        <input
                            type="number"
                            value={this.state.dealerCard}
                            onChange={this.handleDealerCardChange}
                        />
                    </label>
                </div>
                <button onClick={() => alert(calculateResult())}>Calculate</button>
            </form>
            <p>{this.getAdvice()}</p>
            <div className="button-container">
            {cards.map((card) => (
                <button
                    key={card}
                    onClick={() => this.handleCardClick(cardValues[card.toString()])}
                    >
                    {card}
                </button>
                ))}
            </div>
        </div>
    );
    }
}
        
export default CardCounterPage;
