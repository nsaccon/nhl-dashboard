import React from "react";
import './SearchScreen.css'

const SearchScreen = () => {
  return (
    <div className="searchScreen">
        <h1>Young Guns Search</h1>
      <form className="searchScreen_form">
        <label className="searchScreen_firstName">
          Player First Name:
        </label>
        <input className="searchScreen_firstNameInput" type="text" name="firstName" />
        <label className="searchScreen_lastName">
          Player Last Name:
        </label>
        <input className="searchScreen_lastNameInput" type="text" name="lastName" />
        <label className="searchScreen_excludeCSV">
          Exclude Terms:
        </label>
        <input className="searchScreen_excludeCSVInput" type="text" name="excludeCSV" />
        <div className='searchScreen_checkboxes'>
        <div className='searchScreen_checkbox'>
        <label className="searchScreen_onlyGraded">
            Only Graded
        </label>
        <input className="searchScreen_onlyGradedInput" name="onlyIncludeGraded" type="checkbox" />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_excludeGraded">
           Exclude Graded
        </label>
        <input className="searchScreen_excludeGradedInput" name="excludeGraded" type="checkbox" />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeBase">
            Include Base
        </label>
        <input className="searchScreen_includeBaseInput" name="includeBase" type="checkbox" />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeChecklist">
           Include Checklist
        </label>
        <input className="searchScreen_includeChecklistInput" name="includeChecklist" type="checkbox" />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeOversized">
           Include Oversized
        </label>
        <input className="searchScreen_includeOversizedInput" name="includeOversized" type="checkbox" />
        </div>

        <div className='searchScreen_checkbox'>
        <label className="searchScreen_includeLot">
           Include Lots
        </label>
        <input className="searchScreen_includeLotInput" name="includeLot" type="checkbox" />
        </div>

        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchScreen;
