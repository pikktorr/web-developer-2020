import React, { Component, Suspense } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
      component: null,
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    const Page1 = React.lazy(() => import("./components/Page1"));
    const Page2 = React.lazy(() => import("./components/Page2"));
    const Page3 = React.lazy(() => import("./components/Page3"));
    if (this.state.route === "page1") {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Page1 onRouteChange={this.onRouteChange} />;
          </Suspense>
        </div>
      );
    } else if (this.state.route === "page2") {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Page2 onRouteChange={this.onRouteChange} />;
          </Suspense>
        </div>
      );
    } else if (this.state.route === "page3") {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Page3 onRouteChange={this.onRouteChange} />;
          </Suspense>
        </div>
      );
    }
  }
}

export default App;
