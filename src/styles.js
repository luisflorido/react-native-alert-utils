import { StyleSheet } from 'react-native';
import { wpd, hpd } from './utils';

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  background: {
    position: 'absolute',
    flex: 1,
    width: wpd(100),
    height: hpd(100) + 80,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9998,
  },
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  container: {
    position: 'absolute',
    zIndex: 9999,
    alignSelf: 'center',
    width: wpd(85),
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default styles;
