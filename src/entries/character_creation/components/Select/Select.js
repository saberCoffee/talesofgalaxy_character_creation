// Node Modules
import React from 'react';

// Components
import LoadSvg from '../LoadSvg';

// Styles
import styles from './Select.scss';

// Helpers
import in_array from 'helpers/in_array';
import createNewStyles from 'helpers/newStyles';

class Select extends React.Component {  
  handleChange = (e) => {  
    const newValue = e.target.value;

    this.props.handleChange(newValue);
  }
  
  render() {
    const { 
      fieldConfig: { label, placeholder }, 
      fieldData: { currentValue, options } 
    } = this.props;

    return(
      <div>
        <select 
          id={(label) ? `form_${label.toLowerCase()}` : null} 
          value={currentValue} 
          onChange={this.handleChange} className="form-control"
        >
        {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </div>
    );
  }
}

export default Select;
