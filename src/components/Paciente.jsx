const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Eliminamos el paciente");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-5 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-5 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-5 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-5 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-5 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button /** tengo que generar un evento (fila 41) para que al darle click en editar se llene el objeto que genere en al app.jsx **/
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold
         rounded-lg"
          onClick={() => {
            /**tiene que ser un arrow function x q le vamos a pasar un parametro **/
            setPaciente(paciente);
          }}
        >
          Editar{" "}
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white uppercase font-bold
         rounded-lg"
          onClick={
            handleEliminar
          } /** espera a que ocurra el evento antes de eliminar **/
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
