import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { useFetchUser } from "@/features/user";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <App>{children}</App>
    </QueryClientProvider>
  );
}

const App = ({ children }: { children: React.ReactNode }) => {
  useFetchUser();
  return <>{children}</>;
};
