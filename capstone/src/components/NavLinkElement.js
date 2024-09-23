import { Link } from "react-router-dom"

export default function NavLinkElement(props){
    return (
        <li className="link-item" onClick={props.onClick}>
          <Link className="link" to={props.linkTo}>
            {props.text}
          </Link>
        </li>
    )
}