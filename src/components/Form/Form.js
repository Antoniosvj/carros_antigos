import { Button, FormInput } from "..";
import "./Form.css";

export const Form = () => {
  return (
    <form className="form">
      <h3>Para receber nossas novidades, cadastre-se aqui.</h3>
      <FormInput InputName='Nome' type='text'/>
      <FormInput InputName='Email' type='email'/>
      <Button text='Cadastrar' type='submit'/>
    </form>
  );
};
