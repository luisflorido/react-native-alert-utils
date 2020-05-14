import React, { Component } from 'react';
import {
  Animated, View, TouchableWithoutFeedback,
} from 'react-native';
import ModalManager from './manager';
import { Options } from './index';
import { hpd } from './utils';
import styles from './styles';

type ModalState = {
    bounce: any | Animated.Value,
    components: Component[],
    visible: boolean,
    fixed: boolean
}

export interface ModalProps {
    id?: number,
}

export default class Modal extends Component<ModalProps, ModalState> {
  id: any;

  constructor(props: ModalProps) {
    super(props);

    this.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 9);

    ModalManager.register(this);

    this.state = {
      bounce: new Animated.Value(hpd(100)),
      components: [],
      visible: true,
      fixed: false,
    };
  }

  componentWillUnmount() {
    ModalManager.unregister(this);
  }

  setModal(component: React.Component, options?: Options) {
    let { bounce } = this.state;
    this.setState(
      {
        fixed: options?.fixed || false,
        components: [component],
        bounce: bounce !== hpd(100) ? new Animated.Value(hpd(100)) : bounce,
      },
      () => {
        ({ bounce } = this.state);
        Animated.spring(bounce, {
          toValue: 0,
          friction: 6,
          tension: 30,
          useNativeDriver: true,
        }).start();
      },
    );
  }

  popModal() {
    let { components } = this.state;
    const { bounce } = this.state;
    this.setState({ bounce: 0 });

    if (components.length > 0) {
      Animated.spring(bounce, {
        toValue: hpd(100),
        speed: 24,
        useNativeDriver: true,
      }).start(() => {
        let newComponents: Component[] = [];
        if (components.length > 1) {
          const shift = components.shift();
          if (shift) {
            newComponents = [shift];
          }
        }
        this.setState(
          { components: newComponents },
          () => {
            ({ components } = this.state);
            if (components.length > 0) {
              this.showLastModal();
            }
          },
        );
      });
    }
  }

  showLastModal() {
    let { bounce } = this.state;
    this.setState(
      {
        bounce: bounce !== hpd(100) ? new Animated.Value(hpd(100)) : bounce,
      },
      () => {
        ({ bounce } = this.state);
        Animated.spring(bounce, {
          toValue: 0,
          friction: 6,
          tension: 30,
          useNativeDriver: true,
        }).start();
      },
    );
  }

  pushModal(component: Component) {
    let { bounce } = this.state;
    this.setState(
      (state) => ({
        components: [...state.components, component],
        bounce: bounce !== hpd(100) ? new Animated.Value(hpd(100)) : bounce,
      }),
      () => {
        ({ bounce } = this.state);
        Animated.spring(bounce, {
          toValue: 0,
          friction: 6,
          tension: 30,
          useNativeDriver: true,
        }).start();
      },
    );
  }

  showModal() {
    this.setState({ visible: true });
  }

  hideModal() {
    this.setState({ visible: false });
  }

  render() {
    const {
      bounce, visible, components, fixed,
    } = this.state;

    return (
      <View style={styles.absolute}>
        {components && components.length > 0 && visible && (
          <Animated.View
            style={[
              styles.background,
              styles.bg,
            ]}
          >
            <TouchableWithoutFeedback
              onPressOut={() => (!fixed ? this.popModal() : {})}
            >
              <View style={styles.background} />
            </TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.container,
                { transform: [{ translateY: bounce }] },
              ]}
            >
              {components[components.length - 1]}
            </Animated.View>
          </Animated.View>
        )}
      </View>
    );
  }
}
