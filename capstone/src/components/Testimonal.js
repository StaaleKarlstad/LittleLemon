import TestimonialCard from "./TestimonalCard"

export default function Testimonal() {
    return (
        <section className='testimonal' style={{backgroundColor: 'blue'}}>
            <h2>Testimonials</h2>
            <TestimonialCard
                imageURL='../../assets/dave.jpeg'
                name='Dave'
                review='Good service and great food. Immaculate booking system!'>
            </TestimonialCard>
            <TestimonialCard
                imageURL='../../assets/dave.jpeg'
                name='Dave'
                review='Good service and great food. Immaculate booking system!'>
            </TestimonialCard>
            <TestimonialCard
                imageURL='../../assets/dave.jpeg'
                name='Dave'
                review='Good service and great food. Immaculate booking system!'>
            </TestimonialCard>
        </section>
    )
}