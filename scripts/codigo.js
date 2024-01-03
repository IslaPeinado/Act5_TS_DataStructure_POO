import Cliente from './cliente';
const clienteForm = document.getElementById('clienteForm');
if (clienteForm) {
    clienteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nifInput = document.getElementById('nif');
        const emailInput = document.getElementById('email');
        const fechaAltaInput = document.getElementById('fechaAlta');
        const ciudadInput = document.getElementById('ciudad');
        const nif = nifInput.value;
        const email = emailInput.value;
        const fechaAlta = new Date(fechaAltaInput.value);
        const ciudad = ciudadInput.value;
        const nuevoCliente = new Cliente(nif, email, fechaAlta, ciudad);
        nuevoCliente.guardarCliente();
        // Mostrar el mensaje en un párrafo
        const mensajeParrafo = document.createElement('p');
        mensajeParrafo.textContent = `Su usuario con email ${email} ha sido guardado.`;
        document.body.appendChild(mensajeParrafo);
        // Puedes añadir aquí la lógica para el despliegue en IIS
    });
}
