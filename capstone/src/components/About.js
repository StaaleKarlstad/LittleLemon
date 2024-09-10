export default function About(){
    return (
        <section className='about'>
            <div className='about-information'>
                <h1>Little lemon</h1>
                <h3>Chicago</h3>
                <p>
                   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </p>
            </div>
            <div className='about-images'>
                <img src='../../assets/restaurant_chef_B.jpg' alt='chef' className='about-img-bottom'></img>
                <img src='../../assets/lemon_dessert.jpg' alt='restaurant' className='about-img-top'></img>
            </div>
        </section>
    )
}