import axios from "axios";
import { showToast, storeData } from "../../utils";
import { checkVersion, setLoading } from "./global";
import { API_HOST } from "../../config";

export const loginAction = (data, navigation) => dispatch => {
  dispatch(setLoading(true));
  // axios.post(`${API_HOST.url}/auth/login`, data)
  //   .then(res => {
  //     if (dispatch(checkVersion(res.data, navigation))) {
  //       showToast('Berhasil login', 'success');
  //       storeData('user', res.data.data);
        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     dispatch(setLoading(false));
  //     showToast('Maaf, gagal login');
  //   });
};