import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS_QUERY } from "../queries";

function FiltersArea({ onFilterChange }) {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const { data: locationsData, loading: locationsLoading } =
    useQuery(GET_LOCATIONS_QUERY);

  if (locationsLoading) {
    return <div>Locations Loading...</div>;
  }

  const locations = locationsData.locations.results;

  const handleGenderChange = (gender) => {
    const newGender = selectedGender === gender ? "" : gender;
    setSelectedGender(newGender);
    onFilterChange({
      gender: newGender,
      species: selectedSpecies,
      location: selectedLocation,
    });
  };

  const handleSpeciesChange = (species) => {
    const newSpecies = selectedSpecies === species ? "" : species;
    setSelectedSpecies(newSpecies);
    onFilterChange({
      gender: selectedGender,
      species: newSpecies,
      location: selectedLocation,
    });
  };

  const handleLocationChange = (location) => {
    const newLocation = selectedLocation === location ? "" : location;
    setSelectedLocation(newLocation);
    onFilterChange({
      gender: selectedGender,
      species: selectedSpecies,
      location: newLocation,
    });
  };

  const searchLocationInputHandleChange = (e) => {
    setLocationInput(e.target.value);
  };

  //   const countByGender = (gender) => results ? results.filter((result) => result.gender === gender).length : 0;
  //   const countBySpecies = (species) => results ? results.filter((result) => result.species === species).length : 0;
  //   const countByLocation = (location) => results ? results.filter((result) => result.location.name === location).length : 0;

  return (
    <div>
      <div className="filtersHeaderArea">
        <h1>Filters</h1>
        <button
          className="clearFiltersBtn"
          onClick={() => {
            setSelectedGender("");
            setSelectedSpecies("");
            setSelectedLocation("");
            setLocationInput("");
            onFilterChange({ gender: "", species: "", location: "" });
          }}
        >
          Clear filters
        </button>
      </div>

      <hr />

      <h5>GENDER</h5>
      {["Male", "Female", "unknown"].map((gender) => (
        <div key={gender} className="checkboxArea">
          <input
            type="checkbox"
            onChange={() => handleGenderChange(gender)}
            checked={selectedGender === gender}
          />
          <label>{gender}</label>
          <span className="filterCountBoxSpan">0
          {/* {countByGender(gender)} */}
          </span>
        </div>
      ))}

      <h5>SPECIES</h5>
      {["Human", "Alien"].map((species) => (
        <div key={species} className="checkboxArea">
          <input
            type="checkbox"
            onChange={() => handleSpeciesChange(species)}
            checked={selectedSpecies === species}
          />
          <label>{species}</label>
          <span className="filterCountBoxSpan">0
          {/* {countBySpecies(species)} */}
          </span>
        </div>
      ))}

      <h5>LOCATION</h5>
      <input
        value={locationInput}
        onChange={searchLocationInputHandleChange}
        className="searchLocationInput"
      />
      {locations
        .filter((location) =>
          location.name.toLowerCase().includes(locationInput.toLowerCase())
        )
        .map((location, i) => (
          <div key={i} className="checkboxArea">
            <input
              type="checkbox"
              onChange={() => handleLocationChange(location.name)}
              checked={selectedLocation === location.name}
            />
            <label>{location.name}</label>
            <span className="filterCountBoxSpan">
              {/* {countByLocation(location.name)} */}0
            </span>
          </div>
        ))}
    </div>
  );
}

export default FiltersArea;
