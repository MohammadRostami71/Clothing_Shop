import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label , ...otheProps }) => (
    <div className = 'group'>
        <input className = 'form-input' onChange = {handleChange} {...otheProps}/>
        {
            label?
            (<label className = {`${otheProps.value.length ? 'shrink' : '' } from-input-lable `}>
            {label}
            </label>)
            :null
        }
    </div>
)

export default FormInput;