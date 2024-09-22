import { useState, useEffect } from "react";
import { CadastroCarro, Carro } from "..";
import { deleteCarro, getCarros } from "../../services/CarrosServices";
import './Carros.css';

export const Carros = () =>{
    const [carros, setCarros] = useState([]); //cria uma constante de carros utilizando estado e iniciando com um array vazio

    useEffect(() => {//executa apenas uma vez para montar o componente
        const fetchCarros = async () =>{
            const data = await getCarros() //usa a função para pegar dados
            setCarros(data);
        }

        fetchCarros();//chama a função para buscar carros
    },[])

    const handleClickDelete = async (id) =>{
        alert('carro deletado');
        await deleteCarro(id);

        //atualizar a lista de carros apos a exclusão
        const updateLista = await getCarros();
        setCarros(updateLista);
    }

    return(
        <section className="carros">
            {carros.map((carro, index) =>(
                <Carro carro={carro} key={index} onClick={() => handleClickDelete(carro.id)}/> 
            ))}
            <CadastroCarro setCarros={setCarros}/> {/*passando setCarros como props*/}
        </section>
    )
}