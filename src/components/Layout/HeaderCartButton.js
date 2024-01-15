import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (prop) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={prop.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <h2>
        <span className={classes.words}>Cart</span>
      </h2>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
