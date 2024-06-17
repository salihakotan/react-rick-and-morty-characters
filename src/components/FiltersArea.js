import React from "react";

function FiltersArea() {
  return (
    <div>
    <div className="filtersHeaderArea">
    <h1>Filters</h1>
    <button className="clearFiltersBtn">Clear filters</button>
    </div>
      
      <hr />

      <h5>GENDER</h5>
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>Male</label>
        <span> 445</span>
      </div>


      <h5>SPECIES</h5>
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>Male</label>
        <span> 445</span>
      </div>


      <h5>LOCATION</h5>
      <input className="searchLocationInput"/>
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>Male</label>
        <span> 445</span>
      </div>

    </div>
  );
}

export default FiltersArea;
