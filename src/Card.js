import React from "react";
import "./Card.css";

const Card = ({ cardData, distinctions  }) => {
  return (
    <div className="card">
      <h1>{cardData.title}</h1>
      <img src={cardData.imageUrl} alt="" />
      <div className="card_price">
        {cardData.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
        {cardData.currencyType}
      </div>
      <div className="card_distinctions">
          {cardData.distinctions.map(dist => distinctions[dist] + " ")}
      </div>
    </div>
  );
};

export default Card;
