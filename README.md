# Carros Antigos

## Descrição

Projeto criado para fixação de aprendizado em react, fazendo o uso de components e recebendo propriedades por parametros.
Embora seja um projeto inicialmente simples, ele incorpora diversos conceitos que estou aprendendo, utilizando de forma pratica. 
Obs.: Para simular o back-end utilizei o json-server.

## Tecnologias Utilizadas

- React
- Json-server
- useState
- useEffect
- funções assíncronas

## Pré-requisitos

Para rodar este projeto é necessário ter o [node.js](https://nodejs.org/) instalado em sua máquina

## Como rodar o projeto

1. Clone o projeto

```bash

    git clone https://github.com/Antoniosvj/carros_antigos
    cd carros_antigos

```

2. Instale as dependencias
    npm install

3. Instale o json-server
    npm install json-server

4. Para simular o servidor de back-end
    npx json-server db.json --watch --port 3002

    o servidor estará disponível em http://localhost:3002.

5. Para iniciar o projeto React, execute
    npm start

    O projeto estará disponível em http://localhost:3000

## Funcionalidades

* Exibição de uma lista de carros antigos.
* Adição de um novo carro na lista.
* Remoção de um carro da lista.
* Integração com json-server para simular operações de CRUD.
* Utilização de hooks do React com useState e useEffect, para gerenciar estados e efeitos colaterais.

## Contribuição

Sinta-se a vontade para contribuir com este projeto. Todas as sujestões e melhorias são bem-vindas.