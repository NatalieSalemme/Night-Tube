import React from 'react';

const BrandLogo = (props) => {
  return (
    <div
    onClick={props.onFormSubmit}
    className="brand-logo-container">
      <h4
      className="brand-logo">BingeTube</h4>
    </div>
  );
}
export default BrandLogo;
