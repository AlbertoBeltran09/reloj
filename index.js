
const body = document.getElementById("body")




const reloj = document.getElementById("clock")
const contenedorNumeros = document.getElementById("numeros")

function posicionarNumero(numero,index) {
    let angulo = (Math.PI / 180) * (90 - (index * 30))
    let diametro = reloj.clientWidth * 0.8;

    let x = Math.cos(angulo) * (diametro / 2);
    let y = Math.sin(angulo) * (diametro / 2);

    numero.style.transform = `translate(calc(-50% - ${-x}px), calc(-50% - ${y}px))`
}

for ( let index = 1; index <= 12; index ++) {
    let numero = document.createElement("span")

    posicionarNumero(numero, index);

    numero.textContent = index;
    contenedorNumeros.appendChild(numero)
}

window.onresize = function () {
    contenedorNumeros.childNodes.forEach(element => {
        posicionarNumero(element, parseInt(element.textContent));
    });
}

function toggleDark() {
    body.classList.toggle("dark")
    localStorage.setItem("dark", body.classList.contains("dark") ? "1" : "0");
}

if (localStorage.getItem("dark") == "1") {
    body.classList.add("dark");
}

const manecillaHoras = document.getElementById("horas");
const manecillaMinutos = document.getElementById("minutos");
const manecillaSegundos = document.getElementById("segundos");

function actualizarManecillas() {
    const date = new Date();

    const segundos = date.getSeconds();
    const minutos = date.getMinutes();
    const horas = date.getHours();

    const anguloSegundos = (segundos * 6) + 180;
    const anguloMinutos = (minutos * 6) + (segundos / 10) + 180;
    const anguloHoras  = (horas * 30) + (minutos / 2) + 180;

    manecillaSegundos.style.transform = `rotate(${anguloSegundos}deg)`
    manecillaMinutos.style.transform = `rotate(${anguloMinutos}deg)`
    manecillaHoras.style.transform = `rotate(${anguloHoras}deg)`
}

actualizarManecillas()
setInterval(actualizarManecillas, 500)