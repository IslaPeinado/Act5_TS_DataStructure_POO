class Cliente {
    constructor(nif, email, fechaAlta, ciudad) {
        this.nif = nif;
        this.email = email;
        this.fechaAlta = fechaAlta;
        this.ciudad = ciudad;
    }
    guardarCliente() {
        // Aquí podrías realizar la lógica para guardar el cliente, por ejemplo, enviar a una base de datos o almacenar en una estructura de datos
        // En este ejemplo, solo se muestra un mensaje en consola
        console.log(`El usuario con email ${this.email} ha sido guardado.`);
    }
}
export default Cliente;
