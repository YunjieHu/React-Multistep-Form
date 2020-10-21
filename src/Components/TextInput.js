import React from 'react';
import './TextInput.css';

const FormInput = ({
className,
label,
name,
onChange,
placeholder,
type,
value,
error,
children,
required,
...props
}) => {

return (
<>
  <label className={'label'} htmlFor={name}>{label}</label>
  <input
    id={name}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    className={className}
    onChange={onChange}
    aria-required={!!required}
    style={error && {border: 'solid 1px red'}}
  />
  { error && <p className={'error'}>{ error }</p>}
</>
)
}

export default FormInput