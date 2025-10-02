function validarlogin() {
    var email = document.getElementById("email-login").value;
    var senha = document.getElementById("senha-login").value;}

    //acessar lista de usuarios
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    //verificar se o email e senha correspondem a um usuario cadastrado
    const usuario = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    //fazer o parse da lista de usuarios

    lista = JSON.parse(localStorage.getItem("usuarios")) || [];

  