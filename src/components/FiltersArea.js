import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_LOCATIONS_QUERY } from "../queries";

function FiltersArea() {


    const [locationInput,setLocationInput] = useState("")


  const { data: locationsData, loading: locationsLoading } =
    useQuery(GET_LOCATIONS_QUERY);

  if (locationsLoading) {
    return <div>Locations Loading...</div>;
  }

  let locations = locationsData.locations.results;


  const searchLocationInputHandleChange = (e) => {
        setLocationInput(e.target.value)        
  }
  

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
        <span className="filterCountBoxSpan"> 445</span>
      </div>
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>Female</label>
        <span className="filterCountBoxSpan"> 445</span>
      </div>
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>unknown</label>
        <span className="filterCountBoxSpan"> 445</span>
      </div>

      <h5>SPECIES</h5>
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>Male</label>
        <span className="filterCountBoxSpan"> 445</span>
      </div>

      <h5>LOCATION</h5>
      <input value={locationInput} onChange={searchLocationInputHandleChange} className="searchLocationInput" />

      {locationsData &&  (
       locations.map((location,i)=> {

        if(!location.name.toLowerCase().includes(locationInput.toLowerCase())){
            return false
        }

       return <div key={i} className="checkboxArea">
          <input type="checkbox" />
          <label>{location.name}</label>
          <span className="filterCountBoxSpan"> 445</span>
        </div>
       })
      )}
    </div>
  );
}

export default FiltersArea;
