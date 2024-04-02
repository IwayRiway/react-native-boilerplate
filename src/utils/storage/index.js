import AsyncStorage from '@react-native-async-storage/async-storage';
import {showToast} from '../showToast';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    showToast('Gagal menyimpan di localstorage');
  }
};

export const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    showToast('Gagal mengambil data dari localstorage');
  }
};

export const removeData = async storageKey => {
  try {
    await AsyncStorage.removeItem(storageKey);
    return true;
  } catch (e) {
    showToast('Gagal menghapus data dari localstorage');
  }
};

export const mergeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(storageKey, jsonValue);
  } catch (e) {
    showToast('Gagal update data dari localstorage');
  }
};



// WHAT I STORE DATA IN HERE
// 1. user
// {
//   "name": "Riway Restu Islami Yudha",
//   "name_system": "Tik, Riway Restu Islami Yudha",
//   "sys_account_id": 2798,
//   "hrd_employee_id": 5319,
//   "nik": "2209114",
//   "sys_department_id": "10",
//   "duty_plant": [
//       {
//           "id": 3,
//           "name": "TSSI (Pinang)"
//       },
//       {
//           "id": 4,
//           "name": "Techno (DPIL)"
//       },
//       {
//           "id": 1,
//           "name": "IT Tester"
//       },
//       {
//           "id": 6,
//           "name": "Techno Cempaka"
//       }
//   ],
//   "hrd_employee_placement_id": 3,
//   "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNzk4LCJleHAiOjE2ODMzNDQ5OTJ9.1OBOcsL_RQmyS7sDZTku4ql4x4F__v2Nia_oULm47_8",
  // "exp": "05-05-2023 23:49"
  // "sys_plant_id": 1,
  // "permission": {
  //   "3": [
  //       {
  //           "id": 383831,
  //           "sys_account_id": 2798,
  //           "sys_account_permission_base_id": 128,
  //           "sys_plant_id": 3,
  //           "feature": "system",
  //           "kind": null,
  //           "feature_group": null,
  //           "prefix": "sys",
  //           "confidential": false,
  //           "view": true,
  //           "print": false,
  //           "print_list": false,
  //           "export": false,
  //           "import": false,
  //           "suspend": false,
  //           "cancel_suspend": false,
  //           "void": false,
  //           "cancel_void": false,
  //           "create": false,
  //           "modify": false,
  //           "lockdate": false,
  //           "approve_1": false,
  //           "cancel_approve_1": false,
  //           "approve_2": false,
  //           "cancel_approve_2": false,
  //           "approve_3": false,
  //           "cancel_approve_3": false,
  //           "status": "active",
  //           "created_at": "2022-11-03T09:34:25.000Z",
  //           "created_by": 2798,
  //           "updated_at": "2023-02-13T11:55:27.000Z",
  //           "updated_by": 2798
  //       },
  //   ]
  // }
// }