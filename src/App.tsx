import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";

// Initialize React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

/**
 * Root App component that provides necessary context providers
 * and renders the application routes
 */
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
