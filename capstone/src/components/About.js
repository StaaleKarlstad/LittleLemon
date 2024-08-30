export default function About(){
    return (
        <section className='about' style={{backgroundColor: 'grey'}}>
            <div>
                <h1>Little lemon</h1>
                <h3>Chicago</h3>
                <p>
                   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </p>
            </div>
            <div>
                <img src='../../assets/restaurant_chef_B.jpg' alt='chef' className='about-image1' style={{width: '100px', height: '100px'}}></img>
                <img src='../../assets/restaurant.jpg' alt='restaurant' className='about-image2' style={{width: '100px', height: '100px'}}></img>
            </div>
        </section>
    )
}