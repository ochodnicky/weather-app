import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      retry: 0,
    },
  },
});

export const ProvidersWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
