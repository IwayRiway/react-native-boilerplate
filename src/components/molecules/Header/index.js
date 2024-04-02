import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcBack } from '../../../assets';
import { colors, fonts } from '../../../utils';
import {Picker} from '@react-native-picker/picker';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack width={30} height={30} />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {fontSize: 18, fontFamily: fonts.medium, color: colors.primary, marginBottom: -5},
  subTitle: {fontSize: 12, fontFamily: fonts.light, color: colors.secondary},
  back: {
    marginRight: 16,
  }
});