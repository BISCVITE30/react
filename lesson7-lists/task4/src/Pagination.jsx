import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const isPrevPageAvailable = currentPage !== 1;
  const isNextPageAvailable = currentPage !== totalPages;

  return (
    <div className="pagination">
      <button onClick={goPrev} disabled={currentPage === 1} className="btn">
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button onClick={goNext} disabled={currentPage === totalPages} className="btn">
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
