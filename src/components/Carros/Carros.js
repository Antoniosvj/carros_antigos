import { Carro } from "..";
import './Carros.css';

const carros = [
    {
        nome: 'Mercury Cougar',
        img: 'https://www.chavesnamao.com.br/imn/0358x0250/N/veiculos/183710/5176705/mercury-cougar-em-porto-alegre-rs-f6dcf27519b-01.jpeg',
        descricao: 'Motor Coyote V8 5.0',
        ano: 1949
    },
    {
        nome: 'Cadillac Deville',
        img: 'https://www.chavesnamao.com.br/imn/0000x0000/N/veiculos/183710/6057557/cadillac-deville-em-porto-alegre-rs-f76ba5072e1-10.jpg',
        descricao: 'Motor V8 390, Sedan',
        ano: 1960
    },
    {
        nome: 'Willys Aero-Willys',
        img: 'https://www.chavesnamao.com.br/imn/0000x0000/N/veiculos/415181/7071036/willys-aero-willys-em-curitiba-pr-ad4c3c1c.jpg',
        descricao: '3.0 6 cilindros 12v 4P',
        ano: 1970
    },
    {
        nome: 'Volkswagen Fusca',
        img: 'https://www.chavesnamao.com.br/imn/0000x0000/N/veiculos/329504/3589310/volkswagen-fusca-em-sao-paulo-sp-f55afbaa926-04.jpg',
        descricao: '1.3 8V 2P',
        ano: 1970
    },
    {
        nome: 'Ford Rural',
        img: 'https://www.chavesnamao.com.br/imn/0000x0000/N/veiculos/106748/7063384/ford-rural-em-joinville-sc-7fe5e8df.jpg',
        descricao: '0.8 12V 91CV, carro utilitário muito popular na sua época',
        ano: 1970
    },
    {
        nome: 'Chevrolet Opala',
        img: 'https://www.chavesnamao.com.br/imn/0000x0000/N/veiculos/47105/2827562/chevrolet-opala-em-bento-goncalves-rs-8026377d.jpg',
        descricao: '4.1 de luxo 12V 4P',
        ano: 1970
    },

];

export const Carros = () =>{
    return(
        <section className="carros">
            {carros.map((carro, index) =>(
                <Carro carro={carro} key={index}/> 
            ))}
        </section>
    )
}