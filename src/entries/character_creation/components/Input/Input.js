// Node Modules
import React from 'react';

// Components
import Tooltip from '../Tooltip';

// Styles
import styles from './Input.scss';

class Input extends React.Component {
  constructor(props)  {
    super(props);

    this.state = {
      displayTooltip: false
    };
  }

  handleChange = (e) => {
    const { 
      fieldConfig : { label, placeholder, regex },
    } = this.props;

    const { value : newValue } = e.target;

    if (regex) {
      let re = new RegExp(regex);
      if (re.test(newValue)) {
        this.props.handleChange(newValue);
      }
    } else {
      this.props.handleChange(newValue);
    }
  }

  showTooltip = () => {
    this.setState({displayTooltip: true});
  }

  hideTooltip = () => {
    this.setState({displayTooltip: false});
  }

  handleMouseEnter = () => {
    const { fieldConfig : { info }} = this.props;

    if (info) {
      this.showTooltip();
    }
  }

  onMouseLeave = () => {
    const { fieldConfig : { info }} = this.props;

    if (info) {
      this.hideTooltip();
    }
  }  

  render() {
    const { 
      fieldConfig : { id, label, placeholder, info },
      fieldData : { currentValue } 
    } = this.props;

    const { displayTooltip } = this.state;

    return(
      <div className="input-wrapper">
        <input 
          ref={input => { this.inputEl = input; }}
          id={(label) ? `form_${id.toLowerCase()}` : null} className={`form-control ${(info) ? 'has-info' : null}`}
          type="text" value={currentValue} autoComplete="new-password" placeholder={(placeholder) ? placeholder : null}
          onChange={this.handleChange} 
        />
        {info && <span class="input-info" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>?</span>}
        {displayTooltip && 
        <Tooltip element={this.inputEl}>{info}</Tooltip>}
      </div>
    );
  }
}

export default Input;
