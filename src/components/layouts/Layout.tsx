import React from "react";
import { Outlet } from "react-router-dom";
import {Navbar, Sidebar} from "../common";


/**
 * Main layout component that wraps the application pages
 * Includes the navigation bar, sidebar, and main content area
 */
const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // Toggle sidebar visibility (for mobile)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside (for mobile)
  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen flex-row">
      
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar 
        toggleSidebar={toggleSidebar} 
        userImage="/api/placeholder/40/40" 
        userName="Demo User" 
      />
        <main 
          className="flex-1 overflow-y-auto lg:py-10 lg:px-20 px-12 py-8"
          onClick={closeSidebar}
        >
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;