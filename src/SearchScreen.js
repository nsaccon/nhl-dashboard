import React, { useReducer, useState } from "react";
import axios from "./axios";
import './SearchScreen.css'

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
            setCardData(response);
            console.log(response.data);
          }, (error) => {
            console.log(error);
          });        
      }

      const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({
          name: event.target.name,
          value: isCheckbox ? event.target.checked : event.target.value,
        });
      }
    

  return (
    <div className="searchScreen">
        <h1>Young Guns Search</h1>
        {submitting &&
       <div>Loading Message...</div>
     }
      <form className="searchScreen_form" onSubmit={handleSubmit}>
        <label className="searchScreen_firstName">
          Player First Name:
        </label>
        <input className="searchScreen_firstNameInput" type="text" name="firstName" onChange={handleChange} />
        <label className="searchScreen_lastName">
          Player Last Name:
        </label>
        <input className="searchScreen_lastNameInput" type="text" name="lastName" onChange={handleChange} />
        <label className="searchScreen_excludeCSV">
          Exclude Terms:
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

        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchScreen;
