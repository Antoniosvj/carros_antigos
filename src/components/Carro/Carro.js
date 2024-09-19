import "./Carro.css";

export const Carro = ({ carro }) => {
  return (
    <div className="carro">
      <h2>{carro.nome}</h2>
      <img src={carro.img} alt={carro.nome} />
      <p>{carro.descricao}</p>
      <h3>{carro.ano}</h3>
    </div>
  );
};
