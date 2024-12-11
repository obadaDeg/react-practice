import Counter from "./components/Counter";
import Auth from "./components/Auth.jsx";
import Header from "./components/Header.jsx";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      <Counter />
    </>
  );
}

export default App;
