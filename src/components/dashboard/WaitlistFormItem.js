import parse from "html-react-parser";
import { prettyPrintJson } from "pretty-print-json";
import { useState } from "react";
import { Link } from "react-router-dom";

const WaitlistFormItem = ({
  title,
  count,
  dateCreated,
  waitlistID,
  isData,
  dataJSON,
}) => {
  const [show, setShow] = useState(false);
  var html = "";
  if (isData) {
    html = prettyPrintJson.toHtml(dataJSON || {});
  }
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
            {title}
          </p>
          {!isData && (
            <p className="text-xs font-normal text-gray-500  dark:text-gray-400">
              {count} Filled
            </p>
          )}
          <p className="text-xs font-normal text-gray-500  dark:text-gray-400">
            {isData ? "Saved" : "Created"} - {dateCreated}
          </p>
          {show && isData && (
            <p className="text-sm font-normal text-gray-500  dark:text-gray-400">
              {parse(html)}
            </p>
          )}
        </div>
        <div className="inline-flex items-center">
          {isData ? (
            <button
              className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-sm"
              onClick={() => setShow(!show)}
            >
              {show ? "Hide" : "Show"} JSON Payload
            </button>
          ) : (
            <Link
              to={`/app/waitlist/${waitlistID}`}
              className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};
export default WaitlistFormItem;
