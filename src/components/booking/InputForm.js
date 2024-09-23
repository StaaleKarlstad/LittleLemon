
import Input from "./Input";
import Select from "./Select";

export default function InputForm({
  formData,
  handleInputChange,
  handleContinue,
  handleSubmit,
  availableTimes,
}) {
  const inputs = [
    {
      id: "firstname",
      label: "Firstname",
      type: "text",
      pattern: "(?=^.{2,}$)^([A-Za-z][\s]?)+$",
      errorMessage:"First name should be at least 2 characters and should not contain any special characters",
    },
    {
      id: "lastname",
      label: "Lastname",
      type: "text",
      pattern: "(?=^.{2,}$)^([A-Za-z][\s]?)+$",
      errorMessage:"Last name should be at least 2 characters and should not contain any special characters",
    },
    {
      id: "date",
      label: "Choose a date",
      type: "date",
      errorMessage:"",
    },
    {
      id: "guests",
      label: "Size of party",
      type: "number",
      range: [1, 10],
      errorMessage:"Size of party should be between 1-10",
    },
  ];

  const select = {
    id: "time",
    label: "Choose a time",
    type: "select",
    options: availableTimes,
    errorMessage:"You must choose a time",
  };

  return (
    <div className="inputform-container">
      <h1>Book a Table</h1>
      <form id="inputform" className="inputform" onSubmit={handleContinue}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            handleInputChange={handleInputChange}
            value={formData[input.id]}
          ></Input>
        ))}

        <Select
          handleInputChange={handleInputChange}
          value={formData.time}
          {...select}
        ></Select>

        <button
          className="input-button"
          type="submit"
          data-testid="continue-button"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
