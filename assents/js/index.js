// Lista de imagens (renomeie seus arquivos para evitar espaços!)
let imagens = [
    'assents/img/4.jpg',
    'assents/img/3.jpg',
    'assents/img/2.jpg',
    'assents/img/1.jpg',
    'assents/img/5.jpg'

];

let indice = 0;

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel');
    imagemCarrosel.src = imagens[indice];
}

// Troca automaticamente de imagem a cada 5 segundos
function iniciarCarrossel() {
    exibirImagem();
    setInterval(() => {
        indice = (indice + 1) % imagens.length;
        exibirImagem();
    }, 5000);
}

window.onload = iniciarCarrossel;


// ...existing code...
// Carrossel de depoimentos
const depoimentos = document.querySelectorAll('.depoimento');
let depoIndex = 0;

function mostrarDepoimento(index) {
    depoimentos.forEach((depo, i) => {
        depo.classList.toggle('ativo', i === index);
    });
}

document.querySelector('.depo-btn.prev').onclick = function() {
    depoIndex = (depoIndex - 1 + depoimentos.length) % depoimentos.length;
    mostrarDepoimento(depoIndex);
};

document.querySelector('.depo-btn.next').onclick = function() {
    depoIndex = (depoIndex + 1) % depoimentos.length;
    mostrarDepoimento(depoIndex);
};

// Exibe o primeiro depoimento ao carregar
mostrarDepoimento(depoIndex);
// ...existing code...
document.getElementById('form-contato').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('form-contato').style.display = 'none';
    document.getElementById('mensagem-sucesso').style.display = 'block';
};
// ...existing code...