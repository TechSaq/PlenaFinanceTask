import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { FONTS } from './src/utils/fonts';
import { IconSvg } from './src/library';
import { HomeIcon } from './src/assets/icons';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} >

        <NavigationContainer>

          <Text style={{ fontFamily: FONTS.Manrope?.ManropeExtraBold }}  >Welcome to Plena</Text>

        </NavigationContainer>

        <IconSvg icon={HomeIcon} size={200} active />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
