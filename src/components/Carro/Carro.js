import lixeira from '../../img/lixeira.png';
import "./Carro.css";

export const Carro = ({ carro, onClick }) => {
  return (
    <div className="carro">
      <h2>{carro.nome}</h2>
      <img src={carro.img} alt={carro.nome} />
      <p>{carro.descricao}</p>
      <h3>{carro.ano}</h3>
      <button className='lixeira' onClick={onClick}><img src={lixeira}/></button>
    </div>
  );
};
