import React from 'react';

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;