'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

interface TanStackProviderProps {
    children: React.ReactNode;
}

const TanStackProvider = ({ children }: TanStackProviderProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster position="top-right" />
        </QueryClientProvider>
    );
};

export default TanStackProvider;