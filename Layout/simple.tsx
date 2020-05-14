import React from 'react';
import { View, StyleSheet } from 'react-native';
import { hpd } from '../src/utils';

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
  },
});

export type Container = {
  backgroundColor?: string,
  height?: number,
  width?: number,
  padding?: number,
}

export interface LayoutProps {
  children: React.ReactNode[],
  container: Container
}

const Layout = (props: LayoutProps) => {
  const {
    container: {
      backgroundColor, width, height, padding,
    },
    children,
  } = props;
  console.log(padding);
  return (
    <View style={[styles.container, {
      backgroundColor, width, height, padding,
    }]}
    >
      {children}
    </View>
  );
};

Layout.defaultProps = {
  container: {
    backgroundColor: '#fff',
    height: hpd(50),
    width: '90%',
    padding: 20,
  },
};

export default Layout;
