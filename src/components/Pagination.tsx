import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="join">
      {pageNumbers.map((page) => (
        <input
          key={page}
          className="join-item btn btn-square px-4 py-2"
          type="radio"
          name="options"
          aria-label={page.toString()}
          checked={currentPage === page}
          onChange={() => onPageChange(page)}
        />
      ))}
    </div>
  );
};

export default Pagination;
