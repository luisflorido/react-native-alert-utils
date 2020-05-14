import { PixelRatio, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const wpd = (widthPercent) => PixelRatio.roundToNearestPixel((screenWidth * parseFloat(widthPercent)) / 100);

export const hpd = (heightPercent) => PixelRatio.roundToNearestPixel((screenHeight * parseFloat(heightPercent)) / 100);
