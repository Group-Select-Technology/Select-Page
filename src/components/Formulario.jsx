import { useState } from "react"
import { toast } from "react-toastify";


const Formulario = () => {

    const fechaActual = new Date().toISOString().split("T")[0];

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState(fechaActual);
    const [sintomas, setSintomas] = useState("");
    const [id, setId] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();

        if (nombre.trim() === "" || propietario.trim() === "" || email.trim() === "" || fecha.trim() === "" || sintomas.trim() === "") {
            toast.error("Todos los campos son obligatorios");
            return;
        }


        setId(null);
        setNombre("");
        setPropietario("");
        setEmail("");
        setFecha(fechaActual);
        setSintomas("");
    }

    const limpiarFormulario = (e) => {
        e.preventDefault();
    }

    


    return (
        <>
            <h2 className="text-center font-bold text-lg uppercase mb-5">
                Agrega tus pacientes y
                <span className="text-indigo-600"> Administralos</span>
            </h2>

            <form onSubmit={handleSubmit} className="shadow-md rounded-md bg-white py-10 px-5 mx-3 md:mx-0">
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="uppercase text-gray-700 font-bold"
                    >Nombre Mascota</label>
                    <input
                        className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="uppercase text-gray-700 font-bold"
                    >Nombre Propietario</label>
                    <input
                        className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="uppercase text-gray-700 font-bold"
                    >Email Propietario</label>
                    <input
                        className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                        id="email"
                        type="email"
                        placeholder="Email del Propietario"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="uppercase text-gray-700 font-bold"
                    >Fecha Ingreso</label>
                    <input
                        className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                        id="date"
                        type="date"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="uppercase text-gray-700 font-bold"
                    >Síntomas</label>

                    <textarea
                        id="sintomas"
                        className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg h-24"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <div className={`${id ? "flex gap-2" : "block"}`}>
                    <input
                        className={`${id ? "w-4/5" : "w-full"} bg-indigo-600 hover:bg-indigo-800 transition-colors p-3 w-full text-white font-bold uppercase rounded-md cursor-pointer`}
                        type="submit"
                        value={id ? "Actualizar paciente" : "Agregar paciente"}
                    />
                    {id && (
                        <button
                            className="bg-gray-500 hover:bg-gray-600 transition-colors text-white font-bold uppercase rounded-md cursor-pointer w-1/5"
                            onClick={limpiarFormulario}
                        >
                            <svg
                                className="mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </button>
                    )}
                </div>

            </form>
        </>
    )
}

export default Formulario