const initGlobalState = {
  isLoading: false,
  fcm: '',
  plant: [],
  listDepartment: [],
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if (action.type === 'SET_FCM') {
    return {
      ...state,
      fcm: action.value,
    };
  }
  if (action.type === 'SET_PLANT') {
    return {
      ...state,
      plant: action.value,
    };
  }
  if (action.type === 'SET_LIST_DEPARTMENT') {
    return {
      ...state,
      listDepartment: action.value,
    };
  }
  return state;
};