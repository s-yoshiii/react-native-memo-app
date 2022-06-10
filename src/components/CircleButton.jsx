import { shape, string } from 'prop-types';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function CircleButton(props) {
  const { children, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}
CircleButton.propTypes = {
  children: string.isRequired,
  style: shape(),
};
CircleButton.defaultProps = {
  style: null,
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
