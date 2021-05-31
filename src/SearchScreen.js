import React, { useReducer, useState } from "react";
import Card from './Card';
import SearchSummary from './SearchSummary'
import axios from "./axios";
import './SearchScreen.css';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

const SearchScreen = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const [cardData, setCardData] = useState(false);
    
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
          axios.post('/youngguns', formData)
          .then((response) => {
            setCardData(response.data);
            setSubmitting(false);
          }, (error) => {
            setSubmitting(false);
          });        
      }

      const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({
          name: event.target.name,
          value: isCheckbox ? event.target.checked : event.target.value,
        });
      }

      function removeCard(id){
        let filteredArray = cardData.cards.filter(card => card.id !== id);
        cardData.cards = filteredArray;
        cardData.cardsFound -= 1;
        setCardData(cardData);
      }
    

  return (
    <div className="searchScreen" id='searchScreen'>
        <h1>Young Guns Search</h1>
      <form className="searchScreen_form" onSubmit={handleSubmit}>
        <label className="searchScreen_firstName">
          Player First Name: (Optional)
        </label>
        <input className="searchScreen_firstNameInput" type="text" name="firstName" onChange={handleChange} />
        <label className="searchScreen_lastName">
          Player Last Name:
        </label>
        <input className="searchScreen_lastNameInput" type="text" name="lastName" onChange={handleChange} />
        <label className="searchScreen_excludeCSV">
          Exclude Terms: (Optional)
        </label>
        <input className="searchScreen_excludeCSVInput" type="text" name="excludeCSV" onChange={handleChange} />
        <div className='searchScreen_checkboxes'>
        <div className='searchScreen_checkbox'>
        <label className="searchScreen_onlyGraded">
            Only Graded
        </label>
        <input className="searchScreen_onlyGradedInput"  name="onlyIncludeGraded" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_excludeGraded">
           Exclude Graded
        </label>
        <input className="searchScreen_excludeGradedInput" name="excludeGraded" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeBase">
            Include Base
        </label>
        <input className="searchScreen_includeBaseInput" name="includeBase" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeChecklist">
           Include Checklist
        </label>
        <input className="searchScreen_includeChecklistInput" name="includeChecklist" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeOversized">
           Include Oversized
        </label>
        <input className="searchScreen_includeOversizedInput" name="includeOversized" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeLot">
           Include Lots
        </label>
        <input className="searchScreen_includeLotInput" name="includeLot" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeFoil">
           Include Foil
        </label>
        <input className="searchScreen_includeFoilInput" name="includeFoil" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeHighGloss">
           Include High Gloss
        </label>
        <input className="searchScreen_includeHighGlossInput" name="includeHighGloss" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeExclusive">
           Include Exclusive
        </label>
        <input className="searchScreen_includeExclusiveInput" name="includeExclusive" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeAcetate">
           Include Acetate
        </label>
        <input className="searchScreen_includeAcetateInput" name="includeAcetate" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeClearCut">
           Include Clear Cut
        </label>
        <input className="searchScreen_includeClearCutInput" name="includeClearCut" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeCanvas">
           Include Canvas
        </label>
        <input className="searchScreen_includeCanvasCutInput" name="includeCanvasCut" type="checkbox" onChange={handleChange} />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeSpeckled">
           Include Speckled
        </label>
        <input className="searchScreen_includeSpeckledCutInput" name="includeSpeckledCut" type="checkbox" onChange={handleChange} />
        </div>

        </div>
        <input className='searchScreen_submit' type="submit" value={submitting ? "Searching...." : "Search"} />
      </form>
      <div className="searchScreen_return">

      {cardData ?
      <div className="searchScreen_results">
        {cardData.cards.map( (card) => <Card key={card.id} cardData={card} distinctions={cardData.distinctions} removeCard={removeCard} />)} 
      </div>
      : <></>}

      {cardData ?
      <div className="searchScreen_summary">
        <SearchSummary cardData={cardData} /> 
      </div>
      :<></>}
      </div>

    </div>
  );
};

export default SearchScreen;
