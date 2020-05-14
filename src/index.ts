import ModalManager from './manager';

export interface Options {
  fixed?: boolean,
}

export const pushModal = (...args: React.Component[]) => {
  const ref = ModalManager.getManager();
  if (ref) {
    ref.pushModal(...args);
  }
};

export const popModal = () => {
  const ref = ModalManager.getManager();
  if (ref) {
    ref.popModal();
  }
};

export const setModal = (component: React.Component, options?: Options) => {
  const ref = ModalManager.getManager();
  if (ref) {
    ref.setModal(component, options);
  }
};

export const hideModal = () => {
  const ref = ModalManager.getManager();
  if (ref) {
    ref.hideModal();
  }
};

export const showModal = () => {
  const ref = ModalManager.getManager();
  if (ref) {
    ref.showModal();
  }
};
