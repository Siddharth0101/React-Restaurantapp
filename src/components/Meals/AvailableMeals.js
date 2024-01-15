import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Panner",
    description:
      "This Paneer Butter Masala recipe is a rich and creamy dish of paneer (Indian cottage cheese)",
    price: 5,
  },
  {
    id: "m2",
    name: "Chole-Bhature",
    description:
      "Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread",
    price: 4,
  },
  {
    id: "m3",
    name: "Gulab Jamun",
    description:
      "Gulab jamun is an Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup",
    price: 2,
  },
];
const AvailableMeals = () => {
  const MealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.listColor}>{MealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
