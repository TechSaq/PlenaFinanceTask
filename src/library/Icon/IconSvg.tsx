import { View, Text } from 'react-native'
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
  icon: SVGString
}

// render svg icon which take object of SVGString type
const IconSvg = ({ size, active = false, icon }: IconSvgProps) => {

  size = RFValue(size || 32);

  if (!icon) return null;

  return (
    <View>
      <SvgXml
        width={size}
        height={size}
        xml={icon[active ? 'active' : 'inactive']}
      />
    </View>
  )
}

export default IconSvg