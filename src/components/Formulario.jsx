import { useState, useEffect } from "react"; // aca estoy importando los Hooks, que estos estan dentro del paquete de react
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // vamos recibiendo los props que le mando desde el app.jsx.

  const [nombre, setNombre] = useState(""); // lo que va dentro del useState va estar disponible automaticamente en la variable nombre(es su valor inicial)
  const [email, setEmail] = useState("");
  const [propietario, setPropietario] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false); // generamos un state para los errores que se dan cuando dejas un campo vacio que inicia en false

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre); // este paciente. nombre es el que esta en memoria al darla click a editar
      setEmail(paciente.email);
      setPropietario(paciente.propietario);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]); // si el array esta vacio, el useEffect se va a ejecutar una sola vez
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    // estamos previniendo que se mande el form, ya que primero tiene que hacer las validaciones
    e.preventDefault();

    // validaciones del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      // si al completar los campos del form alguno de estos estados  incluye un string vacio entonces:
      setError(true); // si hay errores la variable error pasa a true
      console.log("Todos los campos deben estar llenos");
    } else {
      // si no hay errores
      setError(false); // Esto es para que si llenaste todos los campos el state pase a false y no te muestre el msg de la fila 19
      // Objeto pacientes
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      };

      if (paciente.id) {
        // editando el registro
        objetoPaciente.id = paciente.id;
        const pacienteActualizado = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        );

        setPacientes(pacienteActualizado);
        setPaciente({}); // aca limpiamos de la memoria al objeto que ya fue actualizado
      } else {
        // aca estamos registrando un nuevo paciente

        objetoPaciente.id = generarId(); // antes de almacenarlo en el state le generas un id unico
        setPacientes([...pacientes, objetoPaciente]); // aca estamos tomando una copia de lo que hay en pacientes(para mantenerlo como un array original ya que  no queremos sobreescribir en el)
        // y a medida que llenamos el form le pasamos el objetoPacientes al modificador(setPacientes)
      }

      // Reiniciar el form : cada vez que agrego un paciente el form queda vacio
      setNombre("");
      setEmail("");
      setPropietario("");
      setFecha("");
      setSintomas("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administrarlos</span>
      </p>

      <form
        onSubmit={
          handleSubmit
        } /** evento para el boton de enviar, que esta asociado a la variable que genera arriba **/
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 -mx-5"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={
              nombre
            } /** estamos capturando lo que viene de lo que se escribe en el input **/
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
