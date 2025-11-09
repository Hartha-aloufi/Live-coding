import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "@/components/layouts/Layout";

import { LiveCoding, Question1, Question2 } from "@/pages";

/**
 * Application routing configuration
 * Handles routing between different layouts and pages
 */
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/live-coding" replace />} />

        {/* Main App Routes */}
        <Route path="/" element={<Layout />}>
          <Route path="live-coding" element={<LiveCoding />} />
          <Route path="question-01" element={<Question1 />} />
          <Route path="question-02" element={<Question2 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
