import * as React from "react";
import { hot } from "react-hot-loader";

// const reactLogo = require("./../assets/img/react_logo.svg");
// import "./../assets/scss/App.scss";
import "./../assets/scss/App.scss";

import UseList from './UseList'

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>News</h1>  
        <UseList />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
