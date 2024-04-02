import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Sip } from '../../assets';
import { APP_CONFIG } from '../../config';
import { colors, fonts, getData } from '../../utils';

const Splashscreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      getData('user').then(res => {
        if(res && (((new Date() - new Date(res.exp))/1000) < -3600)){
          navigation.replace('Home');
        } else {
          console.log("MASUK");
          navigation.replace('Login');
        }
      })
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Sip} style={{width: 150, height: 150}} resizeMode='contain' />
      <Text style={styles.text}>{`Version ${APP_CONFIG.version}`}</Text>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 14, color: colors.primary, fontFamily: fonts.regular, position: 'absolute', bottom: 5}
});