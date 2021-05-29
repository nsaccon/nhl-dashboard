import React, {useState} from "react";
import "./Card.css";

const Card = ({ cardData, distinctions }) => {
  const [showCard, setShowCard] = useState(true)

  function hideCard(){
    setShowCard(false);
  }

  return (
    showCard ?
    <div className="card">
      <img src={cardData.imageUrl} alt="" />
      <div className="card_details">
        <h1>{cardData.title}</h1>
        <div className="card_price">
          {cardData.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
          {cardData.currencyType}
        </div>
        <div className="card_distinctions">
          {cardData.distinctions.map((dist) => distinctions[dist] + " ")}
        </div>
      </div>
      <button onClick={hideCard} className='card_removeBtn'>X</button>
    </div>
    : <></>
  );
};

export default Card;
