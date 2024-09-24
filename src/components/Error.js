import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Error(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className='error-page'>
            <h1>404 Ooops...</h1>
            <p>Something went wrong!</p>
            <Button onClick={handleClick} text='To Homepage'></Button>
        </div>
        )
}