import TestimonialCard from "./TestimonalCard"
import './Testimonial.css'

export default function Testimonal() {
    return (
        <section className='testimonal'>
            <h2>Reviews</h2>
            <div className='testimonal-cards'>
                <TestimonialCard
                    imageURL='../../assets/dave.jpeg'
                    name='Dave'
                    review='Good service and great food. Immaculate booking system!'
                    rating='5/5'>
                </TestimonialCard>
                <TestimonialCard
                    imageURL='../../assets/dave.jpeg'
                    name='Dave'
                    review='Good service and great food. Immaculate booking system!'
                    rating='5/5'>
                </TestimonialCard>
                <TestimonialCard
                    imageURL='../../assets/dave.jpeg'
                    name='Dave'
                    review='Good service and great food. Immaculate booking system!'
                    rating='5/5'>
                </TestimonialCard>
                <TestimonialCard
                    imageURL='../../assets/dave.jpeg'
                    name='Dave'
                    review='Good service and great food. Immaculate booking system!'
                    rating='5/5'>
                </TestimonialCard>
            </div>
        </section>
    )
}