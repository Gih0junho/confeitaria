// Captura o envio do formulário
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    validarLogin();
});

function validarLogin() {
    const cracha = document.getElementById("cracha").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const erroMsg = document.getElementById("erro");

    // Pega os usuários cadastrados no localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se existe um usuário com esse crachá e senha
    // Aqui estou usando o email como crachá, caso queira usar outro campo, ajuste no cadastro
    const usuario = usuarios.find(u => u.email === cracha && u.senha === senha);

    if (usuario) {
        // Login correto: redireciona para painel.html (você pode criar seu dashboard)
        window.location.href = "painel.html";
    } else {
        // Login incorreto: mostra mensagem de erro
        erroMsg.textContent = "❌ Crachá ou senha incorretos!";
    }
}
