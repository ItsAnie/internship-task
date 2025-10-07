import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries, setSelectedContinent } from "../../store/slices/countriesSlice.js";

import './Countries.css';

function Countries(){
  const { data, loading, selectedContinent, error } = useSelector(
    (state) => state.countries
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return(
    <div className="container mt-5">
      <h2 className="section-title">Search countries</h2>

      <div className="countries-box d-flex">
        <div className="titles">
          <h3>Continent</h3>
          <h3 className="d-lg-flex d-none">Country</h3>
        </div>

        <div className="table-body">
          <ul className="continent-list">
            {Object.keys(data).map((continent) => (
              <li
                  key={continent}
                  className={`continent-item ${
                    selectedContinent === continent ? "active" : ""
                  }`}

                  onClick={() => dispatch(setSelectedContinent(continent))}
              >
                {continent}
              </li>
            ))}
          </ul>
        

      <div className="countries-cell">
        <div className="countries-grid">
          {selectedContinent && 
            data[selectedContinent].map((country) => (
              <div
                key={country.cca3}
                className="country-item"
              >
                <img src={country.flags.png}
                      alt={country.name.common + 'flag'}
                />
                <span>{country.name.common}</span>
              </div>
            ))
          }
        </div>
      </div>
      </div>
      </div>
      </div>
  );
}

export default Countries;