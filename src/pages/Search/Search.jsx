import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Country from "../../components/Country";
import { getCountriesByName } from "../../redux/actions/country";
import './Search.css'

const Search = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { countries, loading } = useSelector(state => state.countries0);
  const dispatch = useDispatch();

  useEffect(() => {
    setSubmitted(false);
  }, [countries]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (name && name.trim()) {
      dispatch(getCountriesByName(name));
    }
  }

  return (
    <div className="col-lg-12 offset-lg-2x mt-2">
      <main className="form-search-country">
        <form name="form" className="row g-3" onSubmit={handleSubmit}>
          <div className="col-12">
            <input
              type="search"
              name="name"
              className={`form-control form-control-lg ${submitted && !name ? 'is-invalid' : ''}`}
              id="country-name"
              placeholder="Enter full or abbreviated name of a country e.g. AUS"
              onChange={(e) => setName(e.target.value)}
              required={true} disabled={loading} autoFocus
            />
          </div>
        </form>

        <div className="row row-cols-2 row-cols-md-4 mt-1 mb-4 g-4">
          {countries?.map((countryInfo, i) => (
            <Country key={i} countryInfo={countryInfo} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Search;
