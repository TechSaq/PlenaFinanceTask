import { View, Text } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const Spacer = ({ spacing = 12 }) => {
  return (
    <View style={{ marginBottom: RFValue(spacing) }} />
  )
}

export default Spacer