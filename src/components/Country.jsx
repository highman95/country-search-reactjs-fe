import React from 'react';

const Country = ({ countryInfo }) => {
  const { name, region, callingCodes = [] } = countryInfo;

  return (
    <>
      {name && <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <span className="text-info">
                <strong>Calling-Codes:</strong>
              </span>
              <ul>
                {callingCodes?.map((callingCode, i) => (
                  <li key={i}>{callingCode}</li>
                ))}
              </ul>
            </p>
          </div>

          <div className="card-footer">
            <small className="text-muted">
              {region}
            </small>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Country;
