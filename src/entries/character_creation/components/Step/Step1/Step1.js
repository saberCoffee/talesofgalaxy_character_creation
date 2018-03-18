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
    let { rpInfos, character, formData, updateForm } = this.props;

    return (
      <React.Fragment>
        <div className="form-row">
          <FormField 
            fieldData={formData.avatar.data}
            fieldConfig={formData.avatar.config}
            updateForm={updateForm}          
          />
        </div>
        <div className="form-row">
          <FormField 
            fieldData={formData.realname.data}
            fieldConfig={formData.realname.config}
            updateForm={updateForm}
          />
          <FormField 
            fieldData={formData.surname.data}
            fieldConfig={formData.surname.config}
            updateForm={updateForm}
          />    
        </div>          
        <div className="form-row">
          <FormField 
            fieldData={formData.firstname.data}
            fieldConfig={formData.firstname.config}
            updateForm={updateForm}
          />
          <FormField 
            fieldData={formData.lastname.data}
            fieldConfig={formData.lastname.config}
            updateForm={updateForm}
          />    
        </div>    
        <div className="form-row"> 
          <FormField 
            fieldData={formData.species.data}
            fieldConfig={formData.species.config}
            updateForm={updateForm}
          />    
          <FormField 
            fieldData={formData.gender.data}
            fieldConfig={formData.gender.config}
            updateForm={updateForm}
          />   
        </div>
        <div className="form-row">
          <FormField 
            rpInfos={rpInfos}
            fieldData={formData.birthdate.data}
            fieldConfig={formData.birthdate.config}
            updateForm={updateForm}
          />  
        </div>
      </React.Fragment>
    );
  }
}

export default Step1;
