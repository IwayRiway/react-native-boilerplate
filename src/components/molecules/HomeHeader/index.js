/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import {Picker} from '@react-native-picker/picker';
import { IcUser } from '../../../assets';

const HomeHeader = ({title, name, picker, onSelectChange, value, onPress}) => {

  return (
    <View style={styles.profileContainer}>
      <View style={{flex: 1, marginRight: 24}}>
        <Text style={styles.appName} numberOfLines={1}>{title}</Text>
        {picker && (
          <Picker
            style={styles.picker}
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}>
            {picker.map((item, index) => {
              return <Picker.Item label={item.name} value={item.id} key={index} />;
            })}
          </Picker>
        )}
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <IcUser width={50} height={50} />
        {/* <Image source={{uri : 'https://ui-avatars.com/api/?bold=true&background=random&name=' + name}} style={styles.profile} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'white',
  },
  appName: {fontSize: 18, fontFamily: fonts.medium, color: colors.primary},
  profile: {width: 50, height: 50, borderRadius: 8},
  picker: {
    marginTop: -20,
    marginLeft: -15,
    marginRight: -15,
    marginBottom: -15,
  }
});