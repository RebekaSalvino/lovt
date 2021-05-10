let nomeUsuario = 'Beka';

let elementHeader = document.querySelector('olaUsuario'); //seleciona o elemento html
console.log(elementHeader);

elementeHeader.innerText += `<strong>Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = "orange";

const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
}

setTimeout(() => {
    document.querySelector('.modal').style.display = "flex";
    }, 5000)

    const btnClose = () => {
        document.querySelector('.modal').style.diplay = "none";
    }

    let formContact = document.querySelector("#form_contact");

    formContact.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let nomeValue = document.querySelector("#input_nome").value;
    let emailValue = document.querySelector("#input_email").value;
    let telefoneValue = document.querySelector("#input_telefone").value;
    let mensagemValue = document.querySelector("#input_mensagem").value;
    let divMensagemErro = document.querySelector(".mensagem-erro");

    let listErros = [];

    if (nomeValue.length < 2 || emailValue.length < 1 || telefoneValue.length < 1 || mensagemValue.length < 1) {
        divMensagemErro.innerHTML = "Preencha todos campos. <br>";
    } else if (telefoneValue.length < 8) {
        divMensagemErro.innerHTML = "Telefone deve ter pelo menos 8 digitos. <br>";
    } else if (emailValue.indexOf("@") < 0) {
        divMensagemErro.innerHTML = "Insira um email válido. <br>";
    } else {
        formContact.submit();
    }



});
