import React from "react";
import { Link } from "react-router-dom";

/**
 */
const LiveCoding: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrablack mb-6">
          Welcome to the live coding session!
        </h1>

        <p className="text-lg text-gray-800 mb-4">
          This project uses React, Tailwind, React Query, Shadcn UI, and
          React-router.
        </p>

        <p className="text-lg text-gray-800 mb-4">
          Make sure to show your best coding practices and follow the best
          practices for React development.
        </p>

        <Link to="/question-01" className="text-blue-600 hover:underline">
          Start Coding
        </Link>
      </div>
    </div>
  );
};

export default LiveCoding;
