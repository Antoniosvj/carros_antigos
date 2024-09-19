import './Button.css';

export const Button = ({ text, ...props }) =>{
    return(
        <button className='button' type={props.type}>{text}</button>
    )
}