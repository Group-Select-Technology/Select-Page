import ButtonPrimary from "../common/ButtonPrimary"
import ButtonSecondary from "../common/ButtonSecondary"
import useCategoria from "../../hooks/useCategoria";

const Hero = () => {

    const {categoriaActiva} = useCategoria('farmacia');

    console.log("Categoría activa en Hero:", categoriaActiva);

    return (
        <section className="relative overflow-hidden">
            {/* Versión Desktop */}
            <div className="hidden lg:flex justify-between items-center mt-32 mb-10 mx-32 xl:mx-64 relative">
                <div>
                    <h1 className="text-primary font-bold text-5xl xl:text-6xl mb-6 leading-tight">
                        <span>UN SISTEMA DE</span> <br />
                        <span>GESTIÓN INTELIGENTE</span><br />
                        <span>PARA EL CONTROL DE</span><br />
                        <span>TU NEGOCIO</span>
                    </h1>
                    <p className="text-primary mb-10 text-lg xl:text-xl max-w-lg">
                        Olvídate de las mermas, el desorden en el inventario
                        y los errores en facturación. Con Select, gestionas tu negocio
                        de manera eficiente y precisa.
                    </p>
                    <div className="flex gap-6">
                        <ButtonPrimary colorFrom="#2EC6DF" colorTo="#1A2980" to="/demo">
                            AGENDA UNA DEMO
                        </ButtonPrimary>
                        <ButtonSecondary colorBack="#FFF" colorBorder="#17359d" to={categoriaActiva === "farmacia" ? "planes/farma" : "planes/pos"}>
                            VER PLANES
                        </ButtonSecondary>
                    </div>
                </div>
                <div className="relative">
                    {/* Círculo difuminado celeste */}
                    <div className="absolute -top-8 -right-8 w-72 h-72 rounded-full bg-blue-300 opacity-100 blur-3xl z-0"></div>
                    <img src="img/banner_1.png" alt="Imagen Banner" className="max-w-md xl:max-w-lg relative z-10 rounded-[2.5rem]" />
                </div>
            </div>

            {/* Versión Móvil y Tablet - Diseño mejorado */}
            <div className="lg:hidden">
                {/* Imagen hero con overlay degradado */}
                <div className="relative">
                    <img 
                        src="img/banner_1.png" 
                        alt="Imagen Banner" 
                        className="w-full h-64 sm:h-80 md:h-96 object-cover object-top"
                    />
                    {/* Degradado sutil en la parte inferior de la imagen */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                </div>

                {/* Contenido principal */}
                <div className="px-6 sm:px-10 md:px-16 -mt-6 relative z-10">
                    {/* Título con mejor tipografía */}
                    <h1 className="text-primary font-extrabold text-2xl sm:text-3xl md:text-4xl text-center leading-snug mb-4">
                        UN SISTEMA DE <br />
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-800 bg-clip-text text-transparent">
                            GESTIÓN INTELIGENTE
                        </span><br />
                        PARA EL CONTROL DE <br />
                        TU NEGOCIO
                    </h1>

                    {/* Descripción más legible */}
                    <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
                        Olvídate de las mermas, el desorden en el inventario y los errores en facturación. 
                        Con Select, gestionas tu negocio de manera eficiente y precisa.
                    </p>

                    {/* Botones con mejor espaciado */}
                    <div className="flex flex-col gap-3 max-w-xs mx-auto">
                        <ButtonPrimary colorFrom="#2EC6DF" colorTo="#1A2980" className="w-full py-4 text-center" to="demo">
                            AGENDA UNA DEMO
                        </ButtonPrimary>
                        <ButtonSecondary colorBack="#FFF" colorBorder="#17359d" to={categoriaActiva === "farmacia" ? "planes/farma" : "planes/pos"} className="w-full py-4 text-center">
                            VER PLANES
                        </ButtonSecondary>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero