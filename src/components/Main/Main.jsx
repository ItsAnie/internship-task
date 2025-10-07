import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../store/slices/countriesSlice";
import "react-datepicker/dist/react-datepicker.css";
import "./Main.css";
import DatePicker from "react-datepicker";

function Main() {
  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const [dateRange, setDateRange] = useState([null, null]);
  const [checkIn, checkOut] = dateRange;

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const countries = Object.values(data).flat();

  const CheckInCheckOut = ({ value, onClick, checkIn, checkOut }) => {
      return (
        <div className="checkin-checkout-container" onClick={onClick}>
          <p>{checkIn ? checkIn.toLocaleDateString() : "Check-in"}</p>
          <p>{checkOut ? checkOut.toLocaleDateString() : "Check-out"}</p>
        </div>
      );
    };


  // Filter by search
  const filteredCountries =
    search.trim() === ""
      ? countries
      : countries.filter((c) =>
          c.name.common.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <section className="main_info d-flex justify-content-center">
      <div className="main_info_wrapper container d-flex flex-column justify-content-end">
        <div className="info">
          <h1 className="fw-bold">
            Save 15% with <br />
            Late Escape Deals
          </h1>
          <p>There's still time to tick one more destination off your wishlist</p>
          <button className="explore-deal-btn fw-bold">Explore deals</button>
        </div>

        {/* LARGE SCREEN */}
        <div className="search-bar d-lg-flex d-none justify-content-center align-items-center">
          <div className="input-section d-flex align-items-center ">
            <input
              type="text"
              placeholder="Where are you going?"
              className="search-input"
            />
            <div className="divider"></div>
            <div className="section d-flex fd-column">
              <span>Check-in - Check-out</span>
            </div>
            <div className="divider"></div>
            <div className="section">
              <span>1 room 2 adults, 0 children</span>
            </div>
            <div className="divider"></div>
            <button className="search-btn fw-bold">
              <i className="bi bi-search me-2"></i>
              Search
            </button>
          </div>
        </div>

        {/* SMALL SCREEN */}
        <div className="search-bar-small d-lg-none d-flex justify-content-center align-items-center">
          <div className="input-section-small">
            <div className="search-items">
                <p className="search-text">Where are you going?</p>
              
              <div className="filters d-flex">
                <p onClick={() => setShowForm(true)} style={{ cursor: "pointer" }}>
                  {checkIn && checkOut
                    ? `${checkIn.toLocaleDateString()} - ${checkOut.toLocaleDateString()}`
                    : "Check-in"}
                </p>
                <div className="small-divider"></div>
                <p>2 adults, 0 children</p>
                <div className="small-divider"></div>
                <p>1 room</p>
              </div>
            </div>
            <button className="small-search-btn fw-bold" onClick={() => setShowForm(true)}>
              <i className="bi bi-search me-2"></i>
            </button>
          </div>
        </div>

        {/* Overlay form */}
        {showForm && (
          <div className="overlay d-lg-none">
            <div className="overlay-content">
              <button className="close-btn" onClick={() => setShowForm(false)}>
                ×
              </button>

              <div className="overlay-form">
                {/* === INPUT WITH DROPDOWN === */}
                <div className="search-dropdown-input position-relative">
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setOpenDropdown(true)}
                    onBlur={() => setTimeout(() => setOpenDropdown(false), 150)}
                  />

                  {openDropdown && (
                    <ul className="dropdown-list">
                      <h3 className="dropdown-header">Cities</h3>
                      {filteredCountries.map((country) => (
                        <li
                          key={country.cca3}
                          className="dropdown-item"
                          onMouseDown={() => setSearch(country.name.common)}
                        >
                          {country.name.common}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* === ONE RANGE CALENDAR === */}
                <div className="check">
                  <DatePicker
                    selectsRange
                    startDate={checkIn}
                    endDate={checkOut}
                    onChange={(update) => setDateRange(update)}
                    dateFormat="MMMM d, yyyy"
                    popperPlacement="bottom"
                    customInput={<CheckInCheckOut checkIn={checkIn} checkOut={checkOut} />}
                  />
                </div>

                <div className="rooms">
                  <p>Rooms</p>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

                <div className="adults-child">
                  <p>1 room:</p>
                  <div className="d-flex gap-3">
                    <div className="ad-child-inputs">
                      Adults <input type="number" defaultValue={1} />
                    </div>
                    <div className="ad-child-inputs">
                      Children <input type="number" defaultValue={0} />
                    </div>
                  </div>
                </div>

                <div className="overlay-actions">
                  <button
                    className="clear-btn"
                    onClick={() => setDateRange([null, null])}
                  >
                    Clear all
                  </button>
                  <button className="search-btn">
                    <i className="bi bi-search me-2"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Main;
