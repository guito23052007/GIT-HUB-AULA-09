document.getElementById('loginButton').addEventListener("click", (event) => {
    event.preventDefault();

  
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

   
    if (user == "user" && senha =="senha") {
        alert('Login feito com sucesso');
        window.location.href = "pagina2.html";
    } else {
        alert('Senha incorreta. Por favor, tente novamente.');
    }
    if (user.trim() === "" || senha.trim() === "") {
        alert('Por favor, preencha todos os campos.');
    }
});