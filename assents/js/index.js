// Lista de imagens
let imagens = [
    'assents/img/images(1).jfif',
    'assents/img/images (2).jfif',
    'assents/img/images(3).jpg',
    'assents/img/images(4).jfif',
    'assents/img/images(5).jfif'
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
