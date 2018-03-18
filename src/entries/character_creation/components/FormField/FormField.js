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
      id: this.props.id,
      newValue
    });
  }
  
  render() {
    const { 
      fieldData : { hasError },
      fieldConfig : { type, label, errorMsg, mandatory, inlineBlock, info }
    } = this.props;

    const className = [];

    if (hasError) className.push('form-field-hasError');
    
    if (inlineBlock) {
      className.push('form-group form-demi');
    }  else {
      className.push('form-group');      
    }

    return(
      <div className={className.join(' ')}>
        {label && <label htmlFor={`form_${label.toLowerCase()}`}>{label}{mandatory && <span>*</span>}</label>}        
        {{
          picture: <span>Picture...</span>,
          select: <Select fieldData={this.props.fieldData} fieldConfig={this.props.fieldConfig} handleChange={this.handleChange} />,
          textarea: <Editor fieldData={this.props.fieldData} fieldConfig={this.props.fieldConfig} handleChange={this.handleChange} updateForm={this.props.updateForm} />,
          text: <Input fieldData={this.props.fieldData} fieldConfig={this.props.fieldConfig} handleChange={this.handleChange} />,
        }[type]}
        {hasError && <div className={'form-errorMsg'}>{errorMsg}</div>}
        {info &&<div className={'help-block'}><span className="glyphicon glyphicon-info-sign"></span> {info}</div>}        
      </div>
    )
  }
}

export default FormField;
