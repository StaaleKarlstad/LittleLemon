export default function Footer() {
    return (
        <footer>
            <img 
                className='footer-logo'
                src='../../assets/logo.svg' 
                alt='little lemon logo'> 
            </img>
            <div className='footer-navigate'>
                <h3>Navigate</h3>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li><a href='#reservations'>Reservations</a></li>
                    <li><a href='#order'>Order Online</a></li>
                    <li><a href='#login'>Log In</a></li>
                </ul>
            </div>

            <div className='footer-contact'>
                <h3>Contact</h3>
                <ul>
                    <li>Address: blank</li>
                    <li>Phone: blank</li>
                    <li>Email: blank</li>
                </ul>
            </div>
            <div className='footer-social'>
                <h3>Social media</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Tik Tok</li>
                </ul>
            </div>
        </footer>
    )
}