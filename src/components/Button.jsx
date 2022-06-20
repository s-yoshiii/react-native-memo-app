import { func, string } from 'prop-types';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};
Button.defaultProps = {
  onPress: null,
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#876445',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#fff',
  },
});
export default Button;
