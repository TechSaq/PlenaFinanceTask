import { View, Text, ScrollView, ViewStyle } from 'react-native'
import React from 'react'
import { makeStyles } from '../../hooks'

type ScreenViewProps = {
  children: JSX.Element | JSX.Element[],
  scrollView?: boolean,
  style?: ViewStyle
}

const ScreenView = ({ children, scrollView = false, style }: ScreenViewProps) => {

  const styles = useStyles({ style });

  return (
    <>
      {
        scrollView
          ? <ScrollView style={styles.container} >
            {children}
          </ScrollView>
          : <View style={styles.container} >
            {children}
          </View>
      }
    </>

  )
}

export default ScreenView;

const useStyles = makeStyles((theme, { style }) => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    ...style
  }
}))