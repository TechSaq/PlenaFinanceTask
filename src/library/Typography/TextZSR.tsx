import { Text, TextProps, TextStyle } from 'react-native'
import React from 'react'
import { makeStyles } from '../../hooks';
import { FONTS } from '../../utils/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeType } from '../../theming';


type FontWeight = 'ExtraBold' | 'Bold' | 'SemiBold' | 'Medium' | 'Regular'

type TextZSRProps = TextProps & {
  fontSize?: number;
  fontWeight?: FontWeight;
  color?: string;
  themeKey?: keyof ThemeType['colors'];
  style?: TextStyle
}

const TextZSR = ({
  children,
  fontSize = 16,
  fontWeight = 'Regular',
  color,
  themeKey = "BLACK_100",
  style,
  ...rest
}: TextZSRProps
) => {

  const styles = useStyles({ fontSize, fontWeight, color, themeKey, style });

  if (!children) return null;

  return (
    <Text style={styles.text} {...rest}>{children}</Text>
  )
}

export default TextZSR;

type StylesProps = {
  fontSize: number;
  fontWeight: FontWeight;
  color: string;
  themeKey?: keyof ThemeType['colors'];
  style?: TextStyle
};


const useStyles = makeStyles((theme, { fontSize, fontWeight, color, themeKey, style }: StylesProps) => ({
  text: {
    color: color || theme.colors[themeKey || "BLACK_100"],
    fontFamily: FONTS.Manrope[`Manrope${fontWeight}`],
    fontSize: RFValue(fontSize),
    ...style,
  }
}))