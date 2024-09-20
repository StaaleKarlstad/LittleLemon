import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary";
import Booking from "./components/Booking";
import Input from "./components/Input";
import { initializeTimes, updateTimes } from "./components/Booking";

test("renders form submission button", () => {
  const testObj = {
    firstname: "",
    lastname: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  };
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();
  const mockContinue = jest.fn();
  const availableTimes = ["19:00", "20:00"];

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submit={mockSubmit}
    />
  );
  render(
    <BookingSummary
      formData={testObj}
      handleContinue={mockContinue}
      handleSubmit={mockSubmit}
    ></BookingSummary>
  );
  const buttonElement = screen.getByRole("button", {
    name: /Confirm Reservation/i,
  });
  expect(buttonElement).toBeInTheDocument();
});

test("test that initializeTimes() returns a non empty array", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes.length).toBeGreaterThan(0);
});

test("test that array is not empty after calling updateTimes()", () => {
  const updatedTimes = updateTimes([], new Date("2024-09-14"));
  expect(updatedTimes.length).toBeGreaterThan(0);
});

test("test that user can submit form", () => {
  jest.spyOn(console, "log").mockImplementation(() => {});

  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = ["19:00", "20:00"];

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submit={mockSubmit}
    />
  );

  fireEvent.change(screen.getByTestId("firstname"), {
    target: { value: "Reidar" },
  });
  fireEvent.change(screen.getByTestId("lastname"), {
    target: { value: "Reidarson" },
  });
  fireEvent.change(screen.getByTestId("date"), {
    target: { value: "19-03-2030" },
  });
  fireEvent.change(screen.getByTestId("time"), { target: { value: "19:00" } });
  fireEvent.change(screen.getByTestId("guests", { target: { value: 1 } }));
  fireEvent.click(screen.getByTestId("continue-button"));
  fireEvent.click(screen.getByTestId("submit-button"));

  expect(mockSubmit).toHaveBeenCalledWith({
    firstname: "Reidar",
    lastname: "Reidarson",
    date: "",
    time: "19:00",
    guests: 1,
  });
});

test("Test that text input error occurs when leaving input empty", () => {
  const mockHandler = jest.fn();

  const inputObject = {
    id: "test",
    label: "Test",
    type: "text",
    pattern: "(?=^.{2,}$)^([A-Za-z][s]?)+$",
    errorMessage: "Error",
  };

  render(
    <Input {...inputObject} handleInputChange={mockHandler} value=""></Input>
  );

  const inputElement = screen.getByTestId("test");

  fireEvent.focus(inputElement);
  fireEvent.blur(inputElement);

  expect(screen.getByTestId("form-error")).toBeInTheDocument();

  fireEvent.focus(inputElement);
  expect(screen.queryByTestId("form-error")).not.toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "a" } });
  fireEvent.blur(inputElement);
  expect(screen.getByTestId("form-error")).toBeInTheDocument();
});

test("Test that number input error occurs when entering values less than 1 and more than 10", () => {
  const mockHandler = jest.fn();

  const inputObject = {
    id: "test",
    label: "Test",
    type: "text",
    pattern: "(?=^.{2,}$)^([A-Za-z][s]?)+$",
    errorMessage: "Error",
    range: [1, 10],
  };

  render(
    <Input {...inputObject} handleInputChange={mockHandler} value={1}>
      {" "}
    </Input>
  );
  const inputElement = screen.getByTestId("test");
  expect(screen.queryByTestId("form-error")).not.toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 0 } });
  fireEvent.blur(inputElement);
  expect(screen.getByTestId("form-error")).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 10 } });
  fireEvent.blur(inputElement);
  expect(screen.getByTestId("form-error")).toBeInTheDocument();
});
