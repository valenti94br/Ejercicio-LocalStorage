
const form = document.getElementById("formulario");
const nombreInput = form.elements['nombre'];
const emailInput = form.elements['email'];
const mensajeInput = form.elements['mensaje'];
const container = document.querySelector(".container");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = nombreInput.value;
    const email = emailInput.value;
    const mensaje = mensajeInput.value;

    localStorage.setItem('userData', JSON.stringify({ nombre, email, mensaje }));

    container.innerHTML = `<p>${nombre}<br><br>${email}<br><br>${mensaje}</p>`;
});


const form2 = document.getElementById("formulario");
const nombreInput2 = form2.elements['nombre'];
const emailInput2 = form2.elements['email'];
const mensajeInput2 = form2.elements['mensaje'];
const container2 = document.querySelector(".container2");

form2.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = nombreInput2.value;
    const email = emailInput2.value;
    const mensaje = mensajeInput2.value;

    const inData = JSON.parse(localStorage.getItem("usuarios")) || [];

    const newData = { nombre, email, mensaje };
    inData.push(newData);

    localStorage.setItem("usuarios", JSON.stringify(inData));

    // Actualiza el DOM con los datos guardados
    const div = document.createElement("div");
    const nombreP = document.createElement("p");
    const emailP = document.createElement("p");
    const mensajeP = document.createElement("p");

    nombreP.textContent = `Nombre: ${nombre}`;
    emailP.textContent = `Email: ${email}`;
    mensajeP.textContent = `Mensaje: ${mensaje}`;

    div.appendChild(nombreP);
    div.appendChild(emailP);
    div.appendChild(mensajeP);
    container2.appendChild(div);
});


const btnBorrar = document.getElementById("btn-borrar");

btnBorrar.addEventListener("click", function () {
    localStorage.removeItem("usuarios");
    container2.innerHTML = ""; // Limpia el contenido del contenedor
});

const inData = JSON.parse(localStorage.getItem("usuarios")) || [];

inData.forEach(function (persona) {
    const div = document.createElement("div");
    const nombreP = document.createElement("p");
    const emailP = document.createElement("p");
    const mensajeP = document.createElement("p");

    nombreP.textContent = `Nombre: ${persona.nombre}`;
    emailP.textContent = `Email: ${persona.email}`;
    mensajeP.textContent = `Mensaje: ${persona.mensaje}`;

    div.appendChild(nombreP);
    div.appendChild(emailP);
    div.appendChild(mensajeP);
    container2.appendChild(div);
});
