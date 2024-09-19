import './FormInput.css';

 export const FormInput = ({...props}) =>{
    return(
        <div>
            <label>{props.InputName}: </label>
            <input type={props.type}/>
        </div>
    )
}