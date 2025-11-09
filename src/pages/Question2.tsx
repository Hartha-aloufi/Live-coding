import React from "react";
import { Link } from "react-router-dom";

/**
 */
const Question2: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl sm:text-5xl font-extrablack mb-6">
          Not found page
        </h2>

        <p className="text-lg text-gray-800 mb-4">
          Create a not found page component that is displayed when a user tries
          to access a page that does not exist. like{" "}
          <Link
            to="/non-existent-page"
            className="text-blue-600 hover:underline"
          >
            this
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Question2;
