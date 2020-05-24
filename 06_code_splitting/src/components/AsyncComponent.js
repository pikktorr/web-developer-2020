import React, { Component } from "react";

// higher order components - HOC
// component that returns another component

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const component = await importComponent();
      this.setState({
        component: component.default,
      });
    }

    render() {
      const Component = this.state.component;
      // if there are props, return it with component, otherwise don't
      return Component ? <Component {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
