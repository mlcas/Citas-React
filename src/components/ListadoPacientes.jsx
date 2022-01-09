import Paciente from "./Paciente"; // aca estoy metiendo un componente dentro de otro

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // en pacientes tenes el array que se va llenando con lo que cargas en el form

  return (
    // a partir de un tamaño superior al de tablet toma 3/5 de tamaño
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes &&
      pacientes.length /** Generamos un if ternario en donde si hay pacientes te imprime el codigo  html de pacientes  **/ ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Comienza agregando tus Pacientes{" "}
            <span className="text-indigo-600 font-bold ">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
