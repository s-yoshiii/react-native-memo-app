import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

function Icon() {
  const CustomIcon = createIconSetFromIcoMoon(selection);
  return <CustomIcon name="plus" />;
}

export default Icon;
