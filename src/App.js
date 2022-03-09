import React, { Component } from "react";
import Page from "./compenents/ChoosePage";
import SwitchPageButton from "./compenents/SwitchPageButton";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: true,
      personal: {
        name: '',
        age: '',
        gender: '',
        number: '',
        email: '',
        bio: ''
      },
      education: [{
        subject: '',
        level: '',
        school: '',
        from: '',
        to: '',
        id: uniqid()
      }],
      work: [{
        employer: '',
        position: '',
        from: '',
        to: '',
        role: '',
        id: uniqid()
      }],
      functions: {
        addEducation: this.addEducation,
        delEducation: this.delEducation,
        addWork: this.addWork,
        delWork: this.delWork,
        handlePersonal: this.handlePeronsalChange,
        handleEducation: this.handleEducationChange,
        handleWork: this.handleWorkChange
      }
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

  addEducation = () => {
    const educationInfo = {
      subject: '',
      level: '',
      school: '',
      from: '',
      to: '',
      id: uniqid()
    }
    this.setState({
      education: this.state.education.concat(educationInfo) 
    });
  };

  delEducation = (id) => {
    const education = this.state.education.filter(part => part.id !== id);
    this.setState({
      education: education
    })
  }

  addWork = () => {
    const workInfo = {
      employer: '',
      position: '',
      from: '',
      to: '',
      role: '',
      id: uniqid()
    }
    this.setState({
      work: this.state.work.concat(workInfo) 
    });
  };

  delWork = (id) => {
    const work = this.state.work.filter(part => part.id !== id);
    this.setState({
      work: work
    })
  }

  handlePeronsalChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    const personal = {
      ...this.state.personal,
      [name]: value
    };
    this.setState({
      personal
    });
  };

  handleEducationChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    const id = e.target.id;

    const education = [...this.state.education];
    education[id] = {
      ...education[id],
      [name]: value
    };
    this.setState({
      education: education
    });
  };

  handleWorkChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    const id = e.target.id;

    const work = [...this.state.work];
    work[id] = {
      ...work[id],
      [name]: value
    };
    this.setState({
      work: work
    });
  };


  render() {
    const { form, personal, education, work, functions} = this.state
    return (
        <div>
            <h1>CV Application</h1>
            <div className="switchPageWrapper">
              <SwitchPageButton formSelect={this.formTrue} active={this.state.form} text="Form"/>
              <SwitchPageButton formSelect={this.formFalse} active={!this.state.form} text="Review"/>
            </div>
            <Page form={form} personal={personal} education={education} work={work} functions={functions}/>
        </div>
    )
  }
}

export default App;