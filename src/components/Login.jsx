import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmission(event) {
    event.preventDefault();
    const emailEntred = email.current.value;
    const passwordEntred = password.current.value;

    console.log(emailEntred, passwordEntred);
  }

  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
