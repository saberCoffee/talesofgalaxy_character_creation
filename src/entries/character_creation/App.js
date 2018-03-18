// Node Modules
import React, { Component } from 'react';

// Components
import { get } from 'data';
import Form from './components/Form';

// Styles
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    let { data } = this.props;

    this.state = {
      data,
      currentStep: 1
    };
  }

  updateCharacter = () => {
    let { data, data: { character, step1, step2, step3 } } = this.state;

    // let formData = step1.concat(step2, step3);
    let formData = step1;

    Object.keys(formData).forEach(key => {
      character[key] = formData[key].data.currentValue;
    });
    
    this.setState({data});
  }

  render() {
    let { data, currentStep } = this.state;

    return (
      <div className={styles.App}>
        <form className="form-display1 character-creation">
          <Form 
            data={data} 
            currentStep={currentStep}
            updateCharacter={this.updateCharacter}
          />
        </form>
      </div>
    );
  }
}

export default App;