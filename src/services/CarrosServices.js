const apiUrl = 'http://localhost:3002/carros';

export const getCarros = async () =>{ //função assincrona para obter a lista de carros    
    const response = await fetch(apiUrl);
    const data = await response.json(); //recebe os dados da api
    return data;
};

export const postCarros = async (carro) =>{
    const response = await fetch(apiUrl, {
        method:'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(carro),
    });
    const data = await response.json();
    return data;
};

export const deleteCarro = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};