import FormError from "./FormError";
import { useState } from "react";

export default function Input(props) {
  const [isInvalid, setIsInvalid] = useState(false)
  const [focused, setFocused] = useState(false)
  const {handleInputChange, value, ...inputProps} = props

  const handleBlur = (e) => {
    setIsInvalid(!e.target.validity.valid)
    setFocused(false)
  }

  const handleFocus = () => {
    setFocused(true)
  }
  return (
    <div className={`form-input`}>
      <label htmlFor={inputProps.id}>{props.label}</label>
      <input
        type={inputProps.type}
        id={inputProps.id}
        data-testid={inputProps.id}
        value={value}
        onChange={handleInputChange}
        required
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...(inputProps.pattern ? {pattern: inputProps.pattern} : {})}
        {...(inputProps.range ? {min: inputProps.range[0], max: inputProps.range[1]} : {})}
      />
      {(isInvalid && !focused) && <FormError message={inputProps.errorMessage}></FormError>}
    </div>
  );
}
