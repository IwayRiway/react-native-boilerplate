import { showToast } from '../showToast';

export const checkPermission = (menu, access, res) => {
  try {
    var permission = res.permission[`${res.sys_plant_id}`].filter(e => e.feature == menu);
    if (permission.length > 0){
      return permission[0][access];
    } else {
      return false;
    }
  } catch (e) {
    showToast('Terjadi Kesalahan');
  }
};