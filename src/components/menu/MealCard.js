export default function MealCard(props) {
  return (
    <article className="mealcard-container">
      <img src={props.imageURL} alt="meal-image" className="mealcard-image"></img>
      <div className="mealcard-text">
        <div className="mealcard-text-headline">
          <h4>{props.name}</h4>
          <h5 className="mealcard-price">{props.price}</h5>
        </div>
        <p>{props.info}</p>
        <h4>Order a delivery</h4>
      </div>
    </article>
  );
}
