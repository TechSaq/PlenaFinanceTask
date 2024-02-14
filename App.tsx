import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigation } from './src/navigation';
import { ThemeProvider } from './src/theming';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
