import { View, Text, Image } from 'react-native'
import React from 'react'
import { makeStyles } from '../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { IconSvg, TextZSR } from '../library';
import { ImageIcon } from '../assets/icons';

type OfferCardProps = {
  active: boolean;
  item: {
    id: number;
    titles: string[],
    image: string;
  };
}

const OfferCard = ({ active, item }: OfferCardProps) => {

  const styles = useStyles({ active });

  const { titles } = item;

  return (
    <View style={styles.container}>

      <View>
        {
          item.image
            ? <Image
              source={{ uri: item.image }}
              width={RFValue(90)}
              height={RFValue(90)}
            />
            : <IconSvg icon={ImageIcon} active size={RFValue(70)} showBackground={false} />
        }
      </View>

      <View>
        <TextZSR fontSize={20} fontWeight='Regular' themeKey='BLACK_1'>{titles[0]}</TextZSR>
        <TextZSR fontSize={26} fontWeight='ExtraBold' themeKey='BLACK_1' >{titles[1]}</TextZSR>
        <TextZSR fontSize={12} fontWeight='Regular' themeKey='BLACK_1' >{titles[2]}</TextZSR>
      </View>
    </View>
  )
}

export default OfferCard;

const useStyles = makeStyles((theme, { active }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(24),

    padding: RFValue(18),
    borderRadius: RFValue(16),
    backgroundColor: theme.colors[active ? 'SECONDARY' : 'SECONDARY_2'],
  }
}));