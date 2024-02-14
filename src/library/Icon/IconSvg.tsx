import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { RFValue } from 'react-native-responsive-fontsize'

export type SVGString = {
  active: string;
  inactive: string;
}

type IconSvgProps = {
  size?: number;
  active?: boolean;
  icon: SVGString,
  containerStyle?: ViewStyle
}

// render svg icon which take object of SVGString type
const IconSvg = ({ size, active = false, icon, containerStyle }: IconSvgProps) => {

  size = RFValue(size || 24);

  if (!icon) return null;

  return (
    <View style={{
      backgroundColor: active ? "#1e222b" : 'transparent',
      padding: RFValue(16),
      borderRadius: RFValue(100),
      ...containerStyle
    }}
    >
      <SvgXml
        width={size}
        height={size}
        xml={icon[active ? 'active' : 'inactive']}
      />
    </View>
  )
}

export default IconSvg