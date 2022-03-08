import React, { Component } from "react";
import Page from "./compenents/ChoosePage";

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        form: true
      };
  }

  formTrue = () => {
    this.setState({
      form: true
    });
  };

  formFalse = () => {
    this.setState({
      form: false
    });
  };

  render() {
    return (
        <div>
            <h1>CV Application</h1>
            <div className="switchPageWrapper">
              <button onClick={this.formTrue} className="switchPage">Form</button>
              <button onClick={this.formFalse} className="switchPage">Review</button>
            </div>
            <Page form={this.state.form}/>
        </div>
    )
  }
}

export default App;