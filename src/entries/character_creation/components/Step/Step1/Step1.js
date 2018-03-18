// Node Modules
import React from 'react';

// Components
import Step from '../Step';
import FormField from '../../FormField';

class Step1 extends Step {
  constructor(props, styles) {
    super(props, styles);
  }

  render() {
    let { character, formData, updateForm } = this.props;

    return (
      <React.Fragment>
        <div className="form-row">
          <FormField 
            id="avatar" 
            fieldData={formData.avatar.data}
            fieldConfig={formData.avatar.config}
            updateForm={updateForm}          
          />
        </div>
        <div className="form-row">
          <FormField 
            id="realname"
            fieldData={formData.realname.data}
            fieldConfig={formData.realname.config}
            updateForm={updateForm}
          />
          <FormField 
            id="surname"
            fieldData={formData.surname.data}
            fieldConfig={formData.surname.config}
            updateForm={updateForm}
          />    
        </div>          
        <div className="form-row">
          <FormField 
            id="firstname"
            fieldData={formData.firstname.data}
            fieldConfig={formData.firstname.config}
            updateForm={updateForm}
          />
          <FormField 
            id="lastname"
            fieldData={formData.lastname.data}
            fieldConfig={formData.lastname.config}
            updateForm={updateForm}
          />    
        </div>    
        <div className="form-row">
          <FormField 
            id="gender"
            fieldData={formData.gender.data}
            fieldConfig={formData.gender.config}
            updateForm={updateForm}
          />    
        </div>
      </React.Fragment>
    );
  }
}

export default Step1;
