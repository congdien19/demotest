import React from 'react';

const BackToTop = () => {
  return (
    <button id="backToTop" className="back-to-top" aria-label="Back to top" title="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" fill="currentColor"></path>
      </svg>
    </button>
  );
};

export default BackToTop;