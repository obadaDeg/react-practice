import { useState } from "react";
import Header from "./components/Header.jsx";
import Login from "./components/LoginStateful.jsx";
import Signup from "./components/SignUp.jsx";

function App() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <>
      <Header />
      <main>
        {!isSignup && <Login />}
        {isSignup && <Signup />}
        <button
          className="button"
          onClick={() => {
            setIsSignup((prev) => !prev);
          }}
        >
          {isSignup ? "Signup" : "Login"}
        </button>
      </main>
    </>
  );
}

export default App;
