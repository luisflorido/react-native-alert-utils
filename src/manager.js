class Manager {
    component = null

    register(component) {
      if (!this.component && 'id' in component && this.component !== component) {
        this.component = component;
      }
    }

    unregister(component) {
      if (this.component && 'id' in component && component.id === this.component.id) {
        this.component = null;
      }
    }

    getManager() {
      return this.component;
    }
}

export default new Manager();
