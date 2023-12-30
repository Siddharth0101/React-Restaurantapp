import classes from "./MealItems.module.css";
const MealItem = (prop) => {
  const price = `$${prop.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{prop.name}</h3>
        <div className={classes.description}>{prop.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};
export default MealItem;
