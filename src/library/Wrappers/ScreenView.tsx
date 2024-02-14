import { View, Text, ScrollView, ViewStyle } from 'react-native'
import React from 'react'
import { makeStyles } from '../../hooks'

type ScreenViewProps = {
  children: JSX.Element,
  style?: ViewStyle
}

const ScreenView = ({ children, style }: ScreenViewProps) => {

  const styles = useStyles({ style });

  return (
    <ScrollView style={styles.container} >
      {children}
    </ScrollView>
  )
}

export default ScreenView;

const useStyles = makeStyles((theme, { style }) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BLACK_1,
    ...style
  }
}))