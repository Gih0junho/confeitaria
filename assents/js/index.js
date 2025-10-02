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

document.getElementById('form-cadastro').onsubmit = function(e) {
    e.preventDefault();
    const senha = document.getElementById('senha-cad').value;
    const senha2 = document.getElementById('senha2-cad').value;
    const erro = document.getElementById('erro-cadastro');
    const sucesso = document.getElementById('sucesso-cadastro');

    if (senha !== senha2) {
        erro.style.display = 'block';
        sucesso.style.display = 'none';
    } else {
        erro.style.display = 'none';
        sucesso.style.display = 'block';
        document.getElementById('form-cadastro').reset();
    }
};
