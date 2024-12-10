import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  

  function handleSubmission(event) {
    event.preventDefault();
    console.log(formData);
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
  }

  function handleReset() {
    setFormData((prevVals) => ({
      email: "",
      password: "",
    }));
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            // onChange={(e) => {
            //   handleInputChange(e.target);
            // }} // somehting strange it adds undefined: undefined to the key values
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
