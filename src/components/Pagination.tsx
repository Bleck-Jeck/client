// Pagination.tsx
import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  maxPageNumbers?: number; // Добавляем опциональный параметр для указания максимального количества отображаемых номеров страниц
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange, maxPageNumbers = 5 }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo(0, 0); // Прокручиваем страницу наверх после смены страницы
  };

  // Если всего одна страница, не показывать пагинацию
  if (totalPages <= 1) return null;

  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
  let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

  // Если текущая страница ближе к концу списка страниц, сдвинуть начальную страницу
  if (endPage - startPage + 1 < maxPageNumbers) {
    startPage = Math.max(1, endPage - maxPageNumbers + 1);
  }

  return (
    <div className="flex justify-center mt-4 text-black">
      {/* Показываем номера страниц */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`mx-1 px-3 py-1 rounded-md ${
            pageNumber === currentPage ? "bg-gray-300" : "bg-white"
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
