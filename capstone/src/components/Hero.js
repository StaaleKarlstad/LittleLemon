import Button from "./Button"

export default function Hero(){
    return(
        <section className='hero'>
            <div className='hero-div'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned mediterranean restaurant,
                    focused on traditional recipes served with a modern twist </p>
                <div className='hero-button'>
                    <Button
                        text='Reserve a Table'>
                    </Button>
                </div>
            </div>
            <div className='hero-img-div'>
                <img
                    src='../../assets/restaurantfood.jpg'
                    alt='restaurant food'
                    className='hero-img'>
                </img>
            </div>
        </section>
    )
}