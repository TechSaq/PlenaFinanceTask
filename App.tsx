import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { FONTS } from './src/utils/fonts';
import { IconSvg } from './src/library';
import { HomeIcon } from './src/assets/icons';
import { AppNavigation } from './src/navigation';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} >

        <AppNavigation />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
