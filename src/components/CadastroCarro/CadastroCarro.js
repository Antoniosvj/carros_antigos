import { useState } from "react";
import { Button, FormInput } from "..";
import { getCarros, postCarros } from "../../services/CarrosServices";
import './CadastroCarro.css';

export const CadastroCarro = ({ setCarros }) => {
  const [formCarro, setFormCarro] = useState({
    nome: "",
    img: "",
    descricao: "",
    ano: "",
  });

  const handleFieldsChange = (event)=>{
    setFormCarro({
        ...formCarro,
        [event.target.name]: event.target.value
    });
    //console.log(formCarro);
}

  const handleClickCadastro = async () => {
    await postCarros(formCarro); //enviar carro via post

    const updateLista = await getCarros(); //atualiza lista de carros
    setCarros(updateLista);

    alert("Carro cadastrado com sucesso!");
    setFormCarro({
      nome: "",
      img: "",
      descricao: "",
      ano: "",
    });
  };

  return (
    <div className="cadastro-carro">
      <h3>Cadastre um Carro</h3>
      <FormInput
        InputName="Nome do Carro"
        id="nome"
        name="nome"
        value={formCarro.nome}
        onChange={event=>handleFieldsChange(event)}
      />
      <FormInput
        InputName="Imagem do Carro"
        id="img"
        name="img"
        value={formCarro.img}
        onChange={event=>handleFieldsChange(event)}
      />
      <FormInput
        InputName="Descrição"
        id="descricao"
        name="descricao"
        value={formCarro.descricao}
        onChange={event=>handleFieldsChange(event)}
      />
      <FormInput
        InputName="Ano de fabricação"
        id="ano"
        name="ano"
        value={formCarro.ano}
        onChange={event=>handleFieldsChange(event)}
      />
      <Button
        text="Cadastrar Carro"
        type="button"
        onClick={handleClickCadastro}
      />
    </div>
  );
};
