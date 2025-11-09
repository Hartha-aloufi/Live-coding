import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, ShoppingBag, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

/**
 * Sidebar component for navigation
 * Responsive design: shows as a sheet on mobile and fixed sidebar on desktop
 */
const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  // Navigation items with icons
  const navItems: NavItem[] = [
    {
      title: "Live Coding",
      href: "/",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Question 1",
      href: "/Question-01",
      icon: <Code />,
    },
    {
      title: "Question 2",
      href: "/Question-02",
      icon: <Code />,
    },
  ];

  // Sidebar content (shared between mobile and desktop)
  const sidebarContent = (
    <div className="flex h-full flex-col gap-2">
      <div className="px-5 py-4">
        <Link to="/" className="flex items-center"></Link>
      </div>

      <div className="px-3">
        <div className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={closeSidebar}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-2 py-3 text-sm font-semibold transition-all text-secondary",
                  isActive ? "bg-gray-75" : "hover:bg-gray-50"
                )
              }
            >
              <span className="text-gray-600">{item.icon}</span>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar (Sheet component) */}
      <Sheet open={isOpen} onOpenChange={closeSidebar}>
        <SheetContent side="left" className="w-64 p-0">
          {sidebarContent}
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-gray-100 bg-white dark:border-gray-700 dark:bg-dark-900 md:block">
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
