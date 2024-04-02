import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "../../utils";

export const setLoading = (value) => {
  return {type: 'SET_LOADING', value};
};

export const checkVersion = (data, navigation) => dispatch => {
  dispatch({type: 'SET_LOADING', value: false});
  if (data.code == 301) {
    AsyncStorage.multiRemove(['user']).then(() => {
      showToast('Harap perbarui aplikasi anda terlebih dahulu');
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  } else {
    return true;
  }
};