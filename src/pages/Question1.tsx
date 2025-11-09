import React from "react";
import { Link } from "react-router";

/**
 * Requirements:
 * 1. Use React Query to fetch posts from https://dummyjson.com/posts
 * 2. Render the posts in a shadcn table component
 *    (docs: https://ui.shadcn.com/docs/components/table)
 */
const Question1: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-extrablack mb-6">Posts Table</h2>

        <p className="text-lg text-gray-800 mb-4">
          Use React Query to fetch posts from https://dummyjson.com/posts and
          render the posts in a shadcn table component.
        </p>

        <Link
          to="https://ui.shadcn.com/docs/components/table"
          className="text-lg text-blue-600 hover:underline mb-4"
        >
          shadcn table component documentation
        </Link>

        {/* Expected Implementation: */}
        <ul className="list-disc list-inside space-y-2 mb-12 block">
          <li>Create a custom hook to fetch posts data</li>
          <li>Render the posts in a shadcn table component</li>
          <li>Truncate the post body to 100 characters</li>
        </ul>
      </div>
    </div>
  );
};

export default Question1;
