import React from 'react'
import './SearchSummary.css'

const SearchSummary = ({cardData}) => {
    return (
        <div className='searchSummary'>
            <h1>Search Result Summary</h1>
            <div className="searchSummary_count">Cards Found: <b>{cardData.cardsFound}</b></div>
            <div className="searchSummary_prices">
                <h2>Price averages</h2>
                {cardData.distinctions.map((dist, i) => cardData.distinctionPriceAverages[i] === 0 ? <></> : dist === 'None' ? 
                <div className='searchSummary_averages'>Base: <b>{cardData.distinctionPriceAverages[i].toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}</b> USD</div> 
                : <div className='searchSummary_averages'>{dist}: <b>{cardData.distinctionPriceAverages[i].toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}</b> USD</div> )}
            </div>
        </div>
    )
}

export default SearchSummary