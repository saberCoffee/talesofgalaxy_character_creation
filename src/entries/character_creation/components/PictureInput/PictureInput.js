// Node Modules
import React from 'react';

// Components
import LoadSvg from '../LoadSvg';

// Styles
import styles from './PictureInput.scss';

class PictureInput extends React.Component {
  constructor(props) {
    super(props);

    let { currentValue } = this.props.fieldData;

    this.state = {
      currentValue
    };
  }

  componentWillReceiveProps(nextProps) {
    const { fieldData: { currentValue } } = nextProps;

    // Met à jour la valeur actuelle d'un champ si nécessaire
    if (currentValue !== this.state.currentValue) {
      this.setState({currentValue});
    }     
  }

  handleChange = (e) => {  
    const newValue = e.target.value;

    this.props.handleChange(newValue);
  }
  
  render() {
    const { fieldConfig: { label } } = this.props;
    const { currentValue } = this.state; 

    return(
      <div className={styles.pictureInput}>
        <input 
          id={(label) ? `form_${label.toLowerCase()}` : null}
          type="text" value={currentValue} autoComplete="new-password"
          onClick={this.removePlaceholder} onFocus={this.removePlaceholder} onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default PictureInput;
