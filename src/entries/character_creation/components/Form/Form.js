// Node Modules
import React from 'react';

// Components
import Step1 from '../Step/Step1';

// Styles
import styles from './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);

    let { data, currentStep } = this.props;

    this.state = {
      data,
      currentStep
    };
  }

  /**
   * 
   */
  updateForm = ({id, newValue}) => {
    let data = Object.assign({}, this.state.data);
    
    let currentStep;

    switch (this.state.currentStep)
    {
      case 1:
        currentStep = data.step1;
        break;
      case 2:
        currentStep = data.step2;
        break;
      case 3:
        currentStep = data.step3;
        break;
    }

    let currentField = currentStep[id];
    currentField.data.currentValue = newValue;
    
    this.setState({data});
    this.props.updateCharacter();
  }

  render() {
    let { data: { character, step1 }, currentStep } = this.state;

    switch (currentStep)
    {
      case 1:
        return <Step1 character={character} formData={step1} updateForm={this.updateForm} />;
        break;
    }
  }
}

export default Form;
