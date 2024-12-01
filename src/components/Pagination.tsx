import React from "react";
import "../styles/Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className={`pagination-button ${currentPage === 1 ? "disable" : ""}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="pagination-current-page">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={`pagination-button ${
          currentPage === totalPages ? "disable" : ""
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
