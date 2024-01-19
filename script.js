// utilizando o método simples 

// Criando elemento título

let titulo = document.createElement("h1");

// Populando e Manipulando o elemento

titulo.innerText = "Carro à venda"

// Capturando do Elemento Pai via DOM e salvando em uma variável

let estoque = document.querySelector("body");

// Adicionado o elemento titulo no DOM

estoque.appendChild(titulo);

// utilizando o método complexo

// Criando elemento produto

const produto = document.createElement("div");

// Populando e Manipulando o elemento
produto.innerHTML = `
    <div>
        <h2>BMW 330i</h2>
        <img src="https://cdn.adtechpanda.com/d914832c-380a-4da5-9716-6c859baa39d8/-/stretch/off/-/preview/1024x1024/-/format/jpeg/-/quality/lightest/" 
        alt="BMW 330i">
        <p>O BMW 330e M Sport 2021 é um sedã de luxo que faz parte do BMW Série 3. É um veículo híbrido plug-in movido por um motor 2.0 turbo de quatro cilindros e um motor elétrico. A potência combinada do motor e do motor é de 288 cavalos1. O carro atinge velocidade máxima de 143 mph e pode acelerar de 0 a 60 mph em 5,6 segundos1. O carro tem uma economia de combustível de 75 MPGe2.</p>
        <p class="preco-bmw-azul">R$267,999</p>
    </div>
    `;

// Adicionando o elemento produto no DOM
estoque.appendChild(produto)