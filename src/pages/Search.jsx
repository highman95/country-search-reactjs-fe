import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Country from "../components/Country";
import { getCountriesByName } from "../redux/actions/country";
import './Search.css'

const Search = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const countries = useSelector(state => state.countries0.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    setSubmitted(false);
  }, [countries]);

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (name && name.trim()) {
      dispatch(getCountriesByName(name));
    }
  }

  return (
    <div className="col-lg-8 offset-lg-2x">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <input
            type="text"
            name="name"
            className="form-control form-control-lg" id="country-name"
            placeholder="Enter full or abbreviated name of a country e.g. AUS"
            onChange={handleChange}
            required={true} disabled={submitted}
          />
        </div>
      </form>

      <div className="row row-cols-1 row-cols-md-4 mt-1 mb-4 g-4">
        {countries?.map((countryInfo, i) => (
          <Country key={i} countryInfo={countryInfo} />
        ))}
      </div>
    </div>
  );
}

export default Search;
