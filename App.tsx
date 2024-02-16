import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigation } from './src/navigation';
import { ThemeProvider } from './src/theming';
import { ReactQueryProvider } from './src/services/react-query';
import { AppStateStatus, Platform } from 'react-native';
import { focusManager } from '@tanstack/react-query';
import { useAppState, useOnlineManager } from './src/hooks';
import Toast from 'react-native-toast-message';

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

function App() {

  useOnlineManager();

  useAppState(onAppStateChange);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider>
          <ReactQueryProvider>
            <AppNavigation />
          </ReactQueryProvider>
        </ThemeProvider>
      </SafeAreaView>
      <Toast />
    </SafeAreaProvider>
  );
}


export default App;
