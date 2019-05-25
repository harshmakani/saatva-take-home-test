import React from 'react';

/**
 * Static DisplayError component to display information when there is error fetching data via api
 */
const DisplayError = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1 className="primary-color">
          Even the things we love break sometimes.
        </h1>
        <h4>Thanks for your patience while we put the pieces back together.</h4>
      </div>
    </div>
  );
};

export default DisplayError;
