export default function TestimonialCard(props) {
    return (
        <article>
            <div className='testimonal-rating'>
                Rating
            </div>
            <img src={props.imageURL} alt='user image' className='testimonial-image' style={{width: '100px', height: '100px'}}></img>
            <div className='testimonal-user'>{props.name}</div>
            <div className='testimonal-text'>{props.review}</div>
        </article>
    )
}