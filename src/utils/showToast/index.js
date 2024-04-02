import {showMessage} from 'react-native-flash-message';
import { colors } from '../colors';

export const showToast = (message, type) => {
  showMessage({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? colors.green : colors.red,
  });
};