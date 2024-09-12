import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><img src='../../assets/Logo.svg' alt='Little Lemon Logo'></img></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/meals'>Menu</Link></li>
                <li><Link to='/reservations'>Reservations</Link></li>
                <li><Link to='/testimonial'>Reviews</Link></li>
                <li><Link to='/login'>Log In</Link></li>
            </ul>
        </nav>
    )
}