import React, { Component } from "react";
import Page from "./compenents/ChoosePage";

class App extends Component {
  constructor() {
      super();

      this.state = {
        form: true
      };
  }

  render() {
    return (
        <div>
            <h1>CV application</h1>
            <Page />;
        </div>
    )
  }
}

export default App;