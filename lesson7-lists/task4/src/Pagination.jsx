import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button onClick={goPrev} disabled={currentPage === 1} className="btn">
        {currentPage !== 1 && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button onClick={goNext} disabled={currentPage === totalPages} className="btn">
        {currentPage !== totalPages && '→'}
      </button>
    </div>
  );
};

export default Pagination;
