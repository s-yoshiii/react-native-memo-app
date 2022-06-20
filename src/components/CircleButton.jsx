import { func, shape, string } from 'prop-types';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';

function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size={40} color="#fff" />
    </TouchableOpacity>
  );
}
CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};
CircleButton.defaultProps = {
  style: null,
  onPress: null,
};
const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#876445',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});

export default CircleButton;
