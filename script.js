function cambiaMensaje() { 
    document.getElementById("loading-message").innerText = "Enviado!";
    document.getElementById("loading-heart").innerText = "Te amo infinito <3 Todo estará bien mi vida";
    document.querySelector(".corazon").style.display = "block";
    corazon.classList.add("appear");
    
}

setTimeout(cambiaMensaje,4000)

setTimeout(function name(params) {
    alert("Recibiste un abrazo! Todo estará bien mi vida <3")
}, 4200)

