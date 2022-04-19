import {rgbaColor} from '@shopify/react-native-skia';

export const ColorMatrix = {
  dark: {
    activePrimaryColor: '#a3f6ff',
    inactivePrimaryColor: '#9c9c9c',
    activeSecondaryColor: '#2569fb',
    inactiveSecondaryColor: '#757575',
    inactiveNodeColor: rgbaColor(100, 100, 100, 1),
    solarActiveColor: rgbaColor(255, 255, 0, 1),
    batteryActiveColor: rgbaColor(0, 0, 255, 1),
    houseActiveColor: rgbaColor(0, 255, 255, 1),
    gridActiveColor: rgbaColor(255, 0, 0, 1),
    activeLineColor: rgbaColor(255, 255, 255, 0.25),
    inactiveLineColor: rgbaColor(123, 123, 123, 0.25),
    nodeFillColor: rgbaColor(0, 0, 0, 1),
    textColor: rgbaColor(255, 255, 255, 1),
  },
  light: {
    activePrimaryColor: '#37fbe2',
    inactivePrimaryColor: '#9c9c9c',
    activeSecondaryColor: '#2569fb',
    inactiveSecondaryColor: '#757575',
    inactiveNodeColor: rgbaColor(100, 100, 100, 1),
    solarActiveColor: rgbaColor(255, 255, 0, 1),
    batteryActiveColor: rgbaColor(0, 0, 255, 1),
    houseActiveColor: rgbaColor(0, 255, 255, 1),
    gridActiveColor: rgbaColor(255, 0, 0, 1),
    activeLineColor: rgbaColor(0, 0, 0, 0.25),
    inactiveLineColor: rgbaColor(123, 123, 123, 0.25),
    nodeFillColor: rgbaColor(255, 255, 255, 1),
    textColor: rgbaColor(0, 0, 0, 1),
  },
};
