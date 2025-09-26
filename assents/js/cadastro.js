const form = document.getElementById('cadastroForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const cracha = document.getElementById('cracha').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if(!cracha || !senha) return;

    // Salva usuário no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ cracha, senha, tipo: 'admin' }); // aqui todos são admin, você pode mudar
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    msg.textContent = "Cadastro realizado com sucesso!";
    form.reset();
});
