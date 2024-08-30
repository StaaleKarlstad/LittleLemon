import MealCard from './MealCard.js'
import Button from './Button.js'

export default function Meals(){
    return(
        <section className='meals' style={{backgroundColor: 'red'}}>
            <div className='headline'>
                <h1>This weeks specials!</h1>
                <Button text='Online Menu'></Button>
            </div>
            <MealCard
                imageURL='../../assets/greek_salad.jpg'
                name='Greek Salad'
                price='12.99'
                info='Delicious and nutricious! Green stuff drenched in fluids'>
            </MealCard>
            <MealCard
                imageURL='../../assets/greek_salad.jpg'
                name='Greek Salad'
                price='12.99'
                info='Delicious and nutricious! Green stuff drenched in fluids'>
            </MealCard>
            <MealCard
                imageURL='../../assets/greek_salad.jpg'
                name='Greek Salad'
                price='12.99'
                info='Delicious and nutricious! Green stuff drenched in fluids'>
            </MealCard>
        </section>
    )
}