import React from 'react';
import { StyleSheet, Text, TextInput as TextInputRN, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const TextInput = ({label, placeholder, disabled, height, ...restProps}) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInputRN
        style={styles.input(disabled, height)}
        placeholder={placeholder}
        placeholderTextColor={colors.secondary}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: fonts.regular, color: colors.primary},
  input: (disabled, height) => ({
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    color: colors.primary,
    backgroundColor: disabled && colors.disabled,
    height: height && height,
  }),
});