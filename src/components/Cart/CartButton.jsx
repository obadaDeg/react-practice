import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import cartUISlice, { cartUIActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  
  function handleToggleCart() {
    dispatch(cartUIActions.toggle());
  }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
