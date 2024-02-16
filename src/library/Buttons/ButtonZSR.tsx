import { Pressable, PressableProps } from 'react-native'
import React from 'react'
import { makeStyles } from '../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextZSR } from '../Typography';

type ButtonZSRProps = PressableProps & {
  mode?: 'outline' | 'contained'
};

const ButtonZSR = ({ children, mode = 'contained', ...rest }: ButtonZSRProps) => {

  const styles = useStyles();

  return (
    <Pressable
      style={({ pressed }) => [styles.container, styles[mode], pressed ? styles.pressed : undefined]
      }
      {...rest}
    >
      <TextZSR
        fontSize={14}
        fontWeight='SemiBold'
        themeKey={mode === 'contained' ? 'BLACK_1' : 'PRIMARY'}
        style={styles.title}
      >
        {children as string}
      </TextZSR>
    </Pressable>
  )
}

export default ButtonZSR;

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: RFValue(22),
    paddingHorizontal: RFValue(28),
    paddingVertical: RFValue(16),
    // flex: 1,
    borderWidth: RFValue(1),
    borderColor: theme.colors.PRIMARY
  },
  contained: {
    backgroundColor: theme.colors.PRIMARY,
  },
  outline: {
  },
  title: {
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.8
  }
}))