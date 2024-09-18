import FormError from "./FormError";
import { useState } from "react";

export default function Select(props) {
  const { handleInputChange, value, ...inputProps } = props;
  const [isInvalid, setIsInvalid] = useState(false)

  const handleSelectChange = (e) => {
    const selectedTime = e.target.value
    setIsInvalid(selectedTime === "")
  }
  return (
    <div className={`form-select`}>
      <label htmlFor={inputProps.id}>Choose time</label>
      <select
        id={inputProps.id}
        data-testid={inputProps.id}
        value={value}
        onChange={handleInputChange}
        required
      >
        <option value=""> Select a time</option>
        {inputProps.options.map((times) => (
          <option key={times}>{times}</option>
        ))}
      </select>
      {isInvalid && <FormError message={inputProps.errorMessage}></FormError>}
    </div>
  );
}
