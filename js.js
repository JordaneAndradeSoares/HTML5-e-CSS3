let formulario = document.getElementById("id_formulario");
let campo_nome = document.getElementById("nome");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (campo_nome.value.trim() === "") {
        alert("Você deve escrever algo antes de enviar");
    } else {
        alert("Obrigado, " + campo_nome.value + "! Seu nome não vai ser salvo");
        campo_nome.value = "";
    }
});