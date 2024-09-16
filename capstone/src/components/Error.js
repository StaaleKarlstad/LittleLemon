import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Error(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className='error-page'>
            <h1>404 Ooops...something went wrong</h1>
            <Button onClick={handleClick} text='To Homepage'></Button>
        </div>
        )
}