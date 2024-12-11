import { useState } from "react";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validation.js";
import Input from "./Input.jsx";
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleOnBlure: handleEmailOnBlur,
    error: invalidEmail,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleOnBlure: handlePasswordOnBlur,
    error: invalidPassword,
  } = useInput("", (value) => {
    return isNotEmpty(value) && hasMinLength(value, 6);
  });

  function handleSubmission(event) {
    event.preventDefault();
    if (!(invalidEmail || invalidPassword)) {
      console.log("submit ", email, password);
    }
  }

  // somehting strange it adds undefined: undefined to the key values
  // function handleInputChange({id, value}) {
  //   setFormData((prevVals) => ({
  //     ...prevVals,
  //     [id]: value,
  //   }));
  // }

  function handleReset() {}

  return (
    <form onSubmit={handleSubmission} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailOnBlur}
          value={email}
          error={invalidEmail && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordOnBlur}
          value={password}
          error={invalidPassword && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
