import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils';
import { IcDinas } from '../../../assets';
import { Gap } from '../../atoms';

const CardMenu = ({color, title, icon= <IcDinas />, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card(color)} onPress={onPress}>
      {icon}
      <Gap height={10} />
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CardMenu;

const styles = StyleSheet.create({
  card: (color) => ({
    alignItems: 'center',
    backgroundColor: color,
    padding: 10,
    marginBottom: 24,
    borderRadius:10,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginRight: 24,
    width: 80,
  }),
  label: {fontFamily: fonts.regular, color: colors.white, fontSize: 12, textAlign: 'center'},
})