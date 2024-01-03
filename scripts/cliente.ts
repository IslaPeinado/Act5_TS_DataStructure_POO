class Cliente {
    constructor(
        public nif: string,
        public email: string,
        public fechaAlta: Date,
        public ciudad: string
    ) {}

    guardarCliente(): void {
        // Aquí podrías realizar la lógica para guardar el cliente, por ejemplo, enviar a una base de datos o almacenar en una estructura de datos
        // En este ejemplo, solo se muestra un mensaje en consola
        console.log(`El usuario con email ${this.email} ha sido guardado.`);
    }
}

export default Cliente;
