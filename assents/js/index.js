// Lista de imagens
let imagens = [
    'assents/img/',
    'assents/img/Captura de tela 2025-09-26 111236.png',
    'assents/img/Captura de tela 2025-09-26 111255.png',
    'assents/img/Captura de tela 2025-09-26 111313.png',
    'assents/img/Captura de tela 2025-09-26 111329.png'
];

// Índice da imagem atual
let indice = 0;

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel');
    imagemCarrosel.src = imagens[indice];
}

// Troca automaticamente de imagem a cada 5 segundos
function iniciarCarrossel() {
    exibirImagem(); // mostra a primeira
    setInterval(() => {
        indice = (indice + 1) % imagens.length; // avança e volta ao início
        exibirImagem();
    }, 5000);
}

// Inicia o carrossel quando a página carregar
window.onload = iniciarCarrossel;
