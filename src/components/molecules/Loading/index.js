import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { colors, fonts } from '../../../utils';
import { IcLoading } from '../../../assets';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.text}>Tunggu...</Text>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    padding: 32,
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },
  text: {fontSize: 14, fontFamily: fonts.regular, marginTop: 12},
});