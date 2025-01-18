import darkElectricBlue from './dark-electric-blue';
import beer from './beer';
import apple from './apple';
import cerulean from './cerulean';
import corn from './corn';
import tartOrange from './tart-orange';
import gray from './gray';

const colors = {
  white: 'white',
  black: 'black',
  primary: {
    light: darkElectricBlue[100],
    main: darkElectricBlue[500],
    dark: darkElectricBlue[700],
    darker: darkElectricBlue[900],
  },
  secondary: {
    light: beer[100],
    main: beer[500],
    dark: beer[700],
    darker: beer[900],
  },
  error: {
    light: tartOrange[100],
    main: tartOrange[500],
    dark: tartOrange[700],
    darker: tartOrange[900],
  },
  warning: {
    light: corn[100],
    main: corn[500],
    dark: corn[700],
    darker: corn[900],
  },
  info: {
    light: cerulean[100],
    main: cerulean[500],
    dark: cerulean[700],
    darker: cerulean[900],
  },
  success: {
    light: apple[100],
    main: apple[500],
    dark: apple[700],
    darker: apple[900],
  },
  disabled: {
    background: gray[20],
    border: gray[40],
    label: gray[60],
    placeholder: gray[60],
  },
  readOnly: {
    background: 'white',
    border: gray[50],
  },
  gray,
};

export default colors;
