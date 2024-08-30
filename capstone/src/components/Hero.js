import Button from "./Button"

export default function Hero(){
    return(
        <section style={{backgroundColor: 'grey'}} className='hero'>
            <div className='hero-div'>
                <h1>Little Lemon</h1>
                <p>We are a family owned mediterranean restaurant,
                    focused on traditional recipes served with a modern twist </p>
                <div className='hero-button'>
                    <Button
                        text='Reserve a Table'>
                    </Button>
                </div>
            </div>
            <img 
                style={{width: '200px', height: '200px'}}
                src='../../assets/restaurantfood.jpg' 
                alt='restaurant food'
                className='hero-img'></img>
        </section>
    )
}