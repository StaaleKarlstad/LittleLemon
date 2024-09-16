import { Children } from 'react'
import Nav from './Nav.js'
import Footer from './Footer.js'

export default function Wrapper({ children }){
    return(
        <div className='wrapper'>
            <Nav></Nav>
            {Children.map(children, (child) => {return child})}
            <Footer></Footer>
        </div>
    )
}