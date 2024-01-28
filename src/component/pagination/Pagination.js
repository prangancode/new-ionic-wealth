import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Pagination = ({
  // productsCount,
  resultPerPage,
  filteredProductsCount,
}) => {
  // const totalPages = Math.ceil(filteredProductsCount / resultPerPage);

  // const renderPageNumbers = () => {
  //   const pages = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     pages.push(
  //       <a
  //         key={i}
  //         to="#"
  //         className={`inline-flex items-center border-t-2 ${
  //           i === 1 ? "border-transparent pr-1" : "border-transparent px-4"
  //         } pt-4 text-sm font-medium ${
  //           i === 2 ? "text-indigo-600" : "text-gray-500 hover:text-gray-700"
  //         }`}
  //       >
  //         {i}
  //       </a>
  //     );
  //   }
  //   return pages;
  // };

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-20 ">
      <div className="-mt-px flex w-0 flex-1">
        <Link
          to="#"
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <Link
          to="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          1
        </Link>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <Link
          to="#"
          className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
          aria-current="page"
        >
          2
        </Link>
        <Link
          to="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          3
        </Link>
        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
          ...
        </span>
        <Link
          to="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          8
        </Link>
        <Link
          to="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          9
        </Link>
        <Link
          to="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          10
        </Link>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Link
          to="#"
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Pagination;
