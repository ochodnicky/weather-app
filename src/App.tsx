import React from 'react';
import {UIManager} from 'react-native';

import {QueryClientProvider} from '@tanstack/react-query';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

import {queryClient} from '@/api/queryClient';
import {Navigation} from '@/navigation/Navigation';

const App = () => {
  console.log('Available UI components:', UIManager);
  console.log(
    'Has RNSScreenStackHeaderConfig:',
    UIManager.getViewManagerConfig('RNSScreenStackHeaderConfig'),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={MD3LightTheme}>
        <Navigation />
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
