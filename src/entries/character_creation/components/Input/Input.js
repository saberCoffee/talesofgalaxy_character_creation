// Node Modules
import React from 'react';

// Components
import LoadSvg from '../LoadSvg';

// Styles
import styles from './Input.scss';

class Input extends React.Component {
  handleChange = (e) => {  
    const newValue = e.target.value;

    this.props.handleChange(newValue);
  }
  
  render() {
    const { fieldConfig: { label, placeholder }, fieldData: { currentValue } } = this.props;

    return(
      <div>
        <input 
          id={(label) ? `form_${label.toLowerCase()}` : null} className={'form-control'}
          type="text" value={currentValue} autoComplete="new-password" placeholder={(placeholder) ? placeholder : null}
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default Input;
