import { useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(1);

  // const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex justify-center items-center gap-1">
      <a
        href="#"
        className="inline-flex items-center justify-center w-8 h-8 rounded border border-gray-200 bg-white text-gray-900"
      >
        <BiSkipPrevious />
      </a>

      <a
        href="#"
        className="block w-8 h-8 rounded border border-gray-200 bg-white text-center leading-8 text-gray-900"
      >
        1
      </a>

      <a
        href="#"
        className="block w-8 h-8 rounded border border-blue-600 bg-blue-600 text-center leading-8 text-white"
      >
        2
      </a>

      <a
        href="#"
        className="block w-8 h-8 rounded border border-gray-200 bg-white text-center leading-8 text-gray-900"
      >
        3
      </a>

      <a
        href="#"
        className="block w-8 h-8 rounded border border-gray-200 bg-white text-center leading-8 text-gray-900"
      >
        4
      </a>

      <a
        href="#"
        className="inline-flex items-center justify-center w-8 h-8 rounded border border-gray-200 bg-white text-gray-900"
      >
        <BiSkipNext />
      </a>
    </div>
  );
}

export default PaginationComponent;
