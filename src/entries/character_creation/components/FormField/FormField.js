// Node Modules
import React from 'react';

// Components
import Input from '../Input';
import Select from '../Select';
import Editor from '../Editor';
import PictureInput from '../PictureInput';

class FormField extends React.Component {
  /**
   * Met à jour le contenu du formulaire en spécifiant directement la valeur
   */
  handleChange = (newValue) => {
    // Met à jour la valeur actuelle d'un champ
    this.props.updateForm({
      id: this.props.fieldConfig.id,
      newValue
    });
  }

  /**
   * Créé un lien entre la valeur du formField et une valeur
   */
  calculeLinkTo = () => {
    const { 
      fieldData : { currentValue },
      fieldConfig : { linkTo },
      rpInfos
    } = this.props;

    return rpInfos[linkTo] - currentValue;
  }
  
  render() {
    const { 
      fieldData : { hasError, currentValue },
      fieldConfig : { id, type, label, errorMsg, mandatory, inlineBlock, linkTo }
    } = this.props;

    const className = [];

    if (hasError) className.push('form-field-hasError');
    
    if (inlineBlock) {
      className.push('form-group form-demi');
    }  else {
      className.push('form-group');      
    }

    return (
      <div className={className.join(' ')}>
        {label && 
        <label htmlFor={`form_${id.toLowerCase()}`}>
          {label}{mandatory && <span>*</span>} {currentValue && linkTo && !isNaN(this.calculeLinkTo()) && `(${this.calculeLinkTo()} ans)`}      
        </label>
        }        
        {{
          picture: <span>Picture...</span>,
          select: <Select fieldData={this.props.fieldData} fieldConfig={this.props.fieldConfig} handleChange={this.handleChange} />,
          textarea: <Editor fieldData={this.props.fieldData} fieldConfig={this.props.fieldConfig} handleChange={this.handleChange} updateForm={this.props.updateForm} />,
          text: <Input fieldData={this.props.fieldData} fieldConfig={this.props.fieldConfig} handleChange={this.handleChange} />,
        }[type]}
        {hasError && <div className={'form-errorMsg'}>{errorMsg}</div>}    
      </div>
    );
  }
}

export default FormField;
