import React, { useState } from 'react';
import { StyleSheet, Text, TextInput as TextInputRN, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { APP_CONFIG } from '../../config';
import { loginAction } from '../../redux/action';
import { colors, fonts, getData, showToast } from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useState({username: '', password: ''})

  const dispatch = useDispatch();
  const submit = () => {
    const isEmpty = Object.values(form).every(x => x !== null && x !== '');
    if(isEmpty){
      dispatch(loginAction({...form, fcm: 'res', app_name: APP_CONFIG.app_name, version: APP_CONFIG.version}, navigation));
      // getData('fcm').then((res) => {
      // })
    } else {
      showToast('Harap isi username dan password anda');
    }
  }

  return (
    <View style={styles.page}>
      <Header title="Masuk" subTitle="Silahkan masuk dengan akun sip anda" />
      <View style={styles.container}>
        <TextInput
          label="Username"
          placeholder="Masukkan Username Anda"
          value={form.username}
          onChangeText={(value) => setForm({...form, username: value})}
        />
        <Gap height={16} />
        <Text style={styles.label}>Password</Text>
        <View style={styles.login_style}>
          <TextInputRN
            style={styles.input}
            placeholder="Masukkan Password Anda"
            placeholderTextColor= {colors.secondary}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({...form, password: value})}
          />
        </View>
        <Gap height={24} />
        <Button text="Masuk" onPress={() => submit()} />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.secondary_white},
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 24,
    flex: 1,
  },
  label: {fontSize: 16, fontFamily: fonts.regular, color: colors.primary},
  login_style: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10 ,
    paddingHorizontal: 15,
  },
  input: {
    color: colors.primary,
    flex: 1,
  },
  label2: {fontSize: 12, fontFamily: fonts.regular, color: colors.white}
})