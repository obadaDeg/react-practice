import { useState } from "react";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validation.js";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [editedData, setEditedData] = useState({
    email: false,
    password: false,
  });

  const invalidEmail =
    editedData.email && !isEmail(formData.email) && isNotEmpty(formData.email);

  const invalidPassword =
    editedData.password &&
    isNotEmpty(formData.password) &&
    !hasMinLength(formData.password, 6);

  function handleSubmission(event) {
    event.preventDefault();
    if (!(invalidEmail || invalidPassword)) {
      console.log("submit ", formData.email, formData.password);
    }
  }

  // somehting strange it adds undefined: undefined to the key values
  // function handleInputChange({id, value}) {
  //   setFormData((prevVals) => ({
  //     ...prevVals,
  //     [id]: value,
  //   }));
  // }

  function handleInputChange(event) {
    const { id, value } = event.target;

    setFormData((prevVals) => ({
      ...prevVals,
      [id]: value,
    }));

    setEditedData((prevVals) => ({
      ...prevVals,
      [id]: false,
    }));
  }

  function handleReset() {
    setFormData((prevVals) => ({
      email: "",
      password: "",
    }));
  }

  function handleOnBlure(event) {
    setEditedData((prevVals) => ({
      ...prevVals,
      [event.target.id]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmission} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onBlur={handleOnBlure}
            onChange={handleInputChange}
            // onChange={(e) => {
            //   handleInputChange(e.target);
            // }} // somehting strange it adds undefined: undefined to the key values
          />
          <div className="control-error">
            {invalidEmail && <p>Please enter a valid email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onBlur={handleOnBlure}
            onChange={handleInputChange}
          />
          <div className="control-error">
            {invalidPassword && (
              <p>Password should be at least 6 characters long.</p>
            )}
          </div>
        </div>
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
