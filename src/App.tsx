import React from 'react';

import {QueryClientProvider} from '@tanstack/react-query';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

import {queryClient} from '@/api/queryClient';
import {Navigation} from '@/navigation/Navigation';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={MD3LightTheme}>
        <Navigation />
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
