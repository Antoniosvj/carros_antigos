import './FormInput.css';

 export const FormInput = ({InputName, onChange, ...props}) =>{
    return(
        <div className='form-input'>
            <label>{InputName}: </label>
            <input type={props.type} onChange={onChange} {...props}/>
        </div>
    )
}