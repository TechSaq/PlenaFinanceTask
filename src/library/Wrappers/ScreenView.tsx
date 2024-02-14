import { View, Text, ScrollView } from 'react-native'
import React from 'react'

type ScreenViewProps = {
  children: JSX.Element
}

const ScreenView = ({ children }: ScreenViewProps) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#cecece' }} >
      {children}
    </ScrollView>
  )
}

export default ScreenView