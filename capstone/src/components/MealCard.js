export default function MealCard(props){
    return(
        <article>
            <img src={props.imageURL} alt='meal-image' style={{width: '100px', height: '100px' }}></img>
            <h3>{props.name}</h3>
            <h5>{props.price}</h5>
            <p>{props.info}</p>
            <h4>Order a delivery</h4>
        </article>
    )
}