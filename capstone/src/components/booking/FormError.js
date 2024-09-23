export default function FormError(props){
    return(
        <div className="form-error" data-testid="form-error">
            <span className="form-error-message">{props.message}</span>
        </div>
    )
}