import './Button.css';

export const Button = ({ text, onClick, ...props }) =>{
    return(
        <button 
            className='button' 
            type={props.type}
            onClick={(event) =>{
                event.preventDefault();//não recarregar a pagina
                onClick()
            }}
        >{text}
        </button>
    )
}