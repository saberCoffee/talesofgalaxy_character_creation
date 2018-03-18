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

  // componentDidMount() {
  //   document.addEventListener('click', (e) => {
  //     if (!e.target.contains(this.inputEl)) {
  //       this.hideTooltip()
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('click', (e) => {
  //     if (!e.target.contains(this.inputEl)) {
  //       this.hideTooltip()
  //     }
  //   });
  // }

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

  handleFocus = () => {
    const { fieldConfig : { info }} = this.props;

    if (info) {
      this.showTooltip();
    }
  }

  handleBlur = () => {
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
          onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} 
        />
        {displayTooltip && 
        <Tooltip element={this.inputEl}>
          <div className="input-info">{info}</div>
        </Tooltip>}
      </div>
    );
  }
}

export default Input;
