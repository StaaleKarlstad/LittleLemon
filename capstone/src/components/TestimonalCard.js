export default function TestimonialCard(props) {
    return (
        <article className='testimonial-card'>
            <p className='testimonal-rating'>
                {'Rating: ' + props.rating}
            </p>
            <div className='testimonial-img-user'>
                <img src={props.imageURL} alt='user image' className='testimonial-image'></img>
                <div className='testimonal-user'>{props.name}</div>
            </div>
            <div className='testimonal-text'>{props.review}</div>
        </article>
    )
}