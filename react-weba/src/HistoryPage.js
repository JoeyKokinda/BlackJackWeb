import React from "react";
import blackjackboardpic from "./Blackjack_board.jpg";
import blackjack21pic from "./Blackjack21.jpg";
import blackjackpic from "./NetEnt-Blackjack.jpg";

const HistoryPage = () => {
  return (
    <div className="history-page">
      <h1>
        <b>History of BlackJack</b>
      </h1>
      <div className="history-bubble">
        <h2>
          <b>Early Beginnings</b>
        </h2>
        <p>
          <b>European Roots:</b> The genesis of Blackjack lies in several
          European card games. Among them, the French game "Vingt-et-Un"
          (Twenty-One), played in the 1700s, is the most direct precursor. The
          game's objective was to accumulate cards totaling 21 without exceeding
          it.
        </p>
        <p>
          <b>Influence of Other Games:</b> The evolution of Blackjack was shaped
          by games like the Spanish "One and Thirty" (where the goal was to
          reach 31 with at least three cards) and the Italian "Seven and a Half"
          (where players aimed to approach 7.5 points). These games contributed
          elements like card values and the concept of busting.
        </p>
        <p>
          <b>Transition to America:</b> The game crossed the Atlantic with
          French colonists, finding its way to North America. It wasn’t
          initially popular in the United States until gambling houses began to
          offer attractive bonuses. A notable bonus was the 10-to-1 payout for a
          hand with the ace of spades and a black jack, which is believed to
          have coined the term "Blackjack."
        </p>
        <p>
          <b>Early 20th Century:</b> In the early 1900s, as gambling became more
          regulated, Blackjack rules started to standardize. This period marked
          the transition from a variety of regional variations to a more uniform
          game.
        </p>

        <div className="picture-grid">
          <img src={blackjackboardpic} alt="Picture 1" />
          <img src={blackjack21pic} alt="Picture 2" />
        </div>
      </div>
      <div className="history-bubble">
        <h2>
          <b>The Modern Era</b>
        </h2>
        <p>
          <b>Legalization and Boom in Las Vegas:</b>The legalization of gambling
          in Nevada in 1931, and the subsequent rise of Las Vegas as a gambling
          hub, propelled Blackjack to new heights of popularity. It became a
          casino staple, admired for its blend of luck, strategy, and the
          potential for skilled players to reduce the house edge.
        </p>
        <p>
          <b>Card Counting and Strategy Development:</b>In the 1960s, the
          publication of Edward O. Thorp’s book "Beat the Dealer" marked a
          pivotal moment in Blackjack history. Thorp’s strategies, particularly
          card counting, revolutionized the game. Players now had scientifically
          tested methods to improve their odds.
        </p>
        <p>
          <b>Technology and Surveillance:</b>As players became more skilled,
          casinos responded with technological advancements in surveillance and
          card shuffling techniques to counteract card counting and other
          strategies.
        </p>
        <p>
          <b>Global Expansion and Online Play:</b>The latter part of the 20th
          century and the early 21st century saw Blackjack spreading globally.
          The advent of online casinos has further popularized the game, making
          it accessible worldwide and introducing new variations.
        </p>
        <p>
          <b>Blackjack in Popular Culture:</b>Over the years, Blackjack has
          permeated popular culture, featured in numerous movies, books, and TV
          shows. This has contributed to its mystique and popularity.
        </p>

        <div className="picture-grid-2">
          <img src={blackjackpic} alt="Picture 3" />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
