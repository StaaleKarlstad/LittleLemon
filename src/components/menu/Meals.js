import MealCard from "./MealCard.js";
import Button from "../Button.js";
import mealObjects from "./MealObjects.js";

export default function Meals() {
  return (
    <section className="meals">
      <div className="meals-headline">
        <h1>This weeks specials!</h1>
        <Button onClick={() => {}} text="Online Menu"></Button>
      </div>
      <div className="meals-cards">
        {mealObjects.map((meal) => (
          <MealCard
            key={meal.name}
            imageURL={meal.imageURL}
            name={meal.name}
            price={meal.price}
            info={meal.info}
          ></MealCard>
        ))}
      </div>
    </section>
  );
}
