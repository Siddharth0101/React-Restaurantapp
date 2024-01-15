import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(prop) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.word}>Restaurant Menu</h1>
        <HeaderCartButton onClick={prop.onShowCart} />
      </header>
    </Fragment>
  );
}
export default Header;
