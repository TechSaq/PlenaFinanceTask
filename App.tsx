import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} >

        <NavigationContainer>

          <Text>Welcome to Plena</Text>
        </NavigationContainer>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
