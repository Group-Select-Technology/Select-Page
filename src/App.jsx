import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./paginas/Home";
import Nosotros from "./paginas/Nosotros";
import Sistema from "./paginas/Sistema";
import Contacto from "./paginas/Contacto";
import Planes from "./paginas/Planes";
import Demo from "./paginas/Demo";
import PreguntasFrecuentes from "./paginas/PreguntasFrecuentes";
import MainLayout from "./layout/MainLayout";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    //* AREA PUBLICA
                    //? Ruta del componente padre
                    <Route path="/" element={<MainLayout />}>
                        //? Rutas Hijas
                        <Route index element={<Home />} />//* Pagina principal con index
                        <Route path="nosotros" element={<Nosotros />} />
                        <Route path="sistema" element={<Sistema />} />
                        <Route path="planes/:tipo" element={<Planes />} />
                        <Route path="contacto" element={<Contacto />} />
                        <Route path="demo" element={<Demo />} />
                        <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
                    </Route>
                </Routes>
            </BrowserRouter>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
