import React from "react";
import { Form, redirect } from "react-router-dom";

export default function Logout() {
  return (
    <Form action="/logout" method="post">
      <button>Logout</button>
    </Form>
  );
}

export function logout() {
  localStorage.removeItem("token");
  return redirect("/");
}
