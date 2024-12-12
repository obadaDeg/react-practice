import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const cartIsVisible = useSelector((state) => state.cartUI.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://cart-app-7c8f9-default-rtdb.firebaseio.com/items.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      // const data = await response.json();

      console.log(response.ok);
    })();
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
