import { useQuery } from "@apollo/client";
import React from "react";
import { GET_LOCATIONS_QUERY } from "../queries";

function FiltersArea() {
  const { data: locationsData, loading: locationsLoading } =
    useQuery(GET_LOCATIONS_QUERY);

  if (locationsLoading) {
    return <div>Locations Loading...</div>;
  }

  const locations = locationsData.locations.results;

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
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>Female</label>
        <span> 445</span>
      </div>
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>unknown</label>
        <span> 445</span>
      </div>

      <h5>SPECIES</h5>
      <div className="checkboxArea">
        <input type="checkbox" />
        <label>Male</label>
        <span> 445</span>
      </div>

      <h5>LOCATION</h5>
      <input className="searchLocationInput" />

      {locationsData && (
       locations.map((location,i)=> (
        <div key={i} className="checkboxArea">
          <input type="checkbox" />
          <label>{location.name}</label>
          <span> 445</span>
        </div>
       ))
      )}
    </div>
  );
}

export default FiltersArea;
