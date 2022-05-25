import React from 'react';


function InputField(props) {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const [focus, setFocus] = React.useState(false);

    const handleFocus = () => {
        setFocus(true);
    }

  return (
    <div>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focus={focus.toString()}/>
        <span> {errorMessage} </span>
    </div>
  )
}

export default InputField;