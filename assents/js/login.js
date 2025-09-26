const form = document.getElementById('loginForm');
const erroMsg = document.getElementById('erro');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const cracha = document.getElementById('cracha').value.trim();
    const senha = document.getElementById('senha').value.trim();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.cracha === cracha && u.senha === senha);

    if(usuario){
        // Redireciona para admin.html
        window.location.href = "admin.html";
    } else {
        erroMsg.textContent = "Crachá ou senha incorretos!";
    }
});
