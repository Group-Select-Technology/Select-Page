import React, { useState } from 'react'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import useCategoria from '../../hooks/useCategoria'

const DemoForm = () => {
    const { categoriaActiva, setCategoriaActiva } = useCategoria();

    // Estados del formulario
    const [ruc, setRuc] = useState('');
    const [nombreComercial, setNombreComercial] = useState('');
    const [nombresApellidos, setNombresApellidos] = useState('');
    const [celular, setCelular] = useState('');
    const [tipoNegocio, setTipoNegocio] = useState('');
    const [tipoNegocioOtro, setTipoNegocioOtro] = useState('');
    const [correo, setCorreo] = useState('');
    const [numeroLocales, setNumeroLocales] = useState('');
    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const [enviandoCorreo, setEnviandoCorreo] = useState(false);
    
    // Honeypot - campo trampa para bots
    const [honeypot, setHoneypot] = useState('');
    
    // Cooldown - tiempo mínimo entre envíos (en segundos)
    const COOLDOWN_SEGUNDOS = 60;

    // Verificar si el usuario puede enviar (cooldown)
    const puedeEnviar = () => {
        const ultimoEnvio = localStorage.getItem('ultimoEnvioDemo');
        if (!ultimoEnvio) return true;
        
        const tiempoTranscurrido = (Date.now() - parseInt(ultimoEnvio)) / 1000;
        return tiempoTranscurrido >= COOLDOWN_SEGUNDOS;
    };

    // Obtener tiempo restante para poder enviar
    const getTiempoRestante = () => {
        const ultimoEnvio = localStorage.getItem('ultimoEnvioDemo');
        if (!ultimoEnvio) return 0;
        
        const tiempoTranscurrido = (Date.now() - parseInt(ultimoEnvio)) / 1000;
        const restante = Math.ceil(COOLDOWN_SEGUNDOS - tiempoTranscurrido);
        return restante > 0 ? restante : 0;
    };

    // Registrar envío exitoso
    const registrarEnvio = () => {
        localStorage.setItem('ultimoEnvioDemo', Date.now().toString());
    };

    // Validar anti-spam (honeypot + cooldown)
    const validarAntiSpam = () => {
        // Verificar honeypot (si tiene valor, es un bot)
        if (honeypot) {
            console.log('Bot detectado - honeypot activado');
            toast.success('¡Mensaje enviado correctamente!'); // Mensaje falso para el bot
            return false;
        }

        // Verificar cooldown
        if (!puedeEnviar()) {
            const restante = getTiempoRestante();
            toast.warning(`Por favor espera ${restante} segundos antes de enviar otro mensaje.`);
            return false;
        }

        return true;
    };

    // Determinar estilos según categoría
    const esFarmacia = categoriaActiva === 'farmacia';
    const bgColor = esFarmacia ? 'bg-secondary' : 'bg-primary';
    const bgImage = esFarmacia ? '/img/demo/demo-farma.png' : '/img/demo/demo-pos.png';
    const productoSeleccionado = esFarmacia ? 'SELECT FARMA' : 'SELECT POS';

    // Obtener el tipo de negocio final
    const getTipoNegocioFinal = () => {
        return tipoNegocio === 'Otro' ? tipoNegocioOtro : tipoNegocio;
    };

    // Función para limpiar el formulario
    const limpiarFormulario = () => {
        setRuc('');
        setNombreComercial('');
        setNombresApellidos('');
        setCelular('');
        setTipoNegocio('');
        setTipoNegocioOtro('');
        setCorreo('');
        setNumeroLocales('');
        setMostrarOpciones(false);
    };

    // Función para validar el formulario
    const validarFormulario = () => {
        const tipoNegocioFinal = getTipoNegocioFinal();

        if (!ruc.trim()) {
            toast.error('El campo RUC es obligatorio');
            return false;
        }
        if (!nombreComercial.trim()) {
            toast.error('El campo Nombre Comercial es obligatorio');
            return false;
        }
        if (!nombresApellidos.trim()) {
            toast.error('El campo Nombres y Apellidos es obligatorio');
            return false;
        }
        if (!celular.trim()) {
            toast.error('El campo Celular es obligatorio');
            return false;
        }
        if (!tipoNegocioFinal.trim()) {
            toast.error('El campo Tipo de Negocio es obligatorio');
            return false;
        }
        if (tipoNegocio === 'Otro' && !tipoNegocioOtro.trim()) {
            toast.error('Por favor especifique el tipo de negocio');
            return false;
        }

        return true;
    };

    // Función para enviar por WhatsApp
    const enviarWhatsApp = (e) => {
        e.preventDefault();

        if (!validarFormulario()) return;
        if (!validarAntiSpam()) return;

        const tipoNegocioFinal = getTipoNegocioFinal();

        // Construir mensaje
        let mensaje = `*Solicitud de Demo - ${productoSeleccionado}*\n\n`;
        mensaje += `*RUC:* ${ruc}\n`;
        mensaje += `*Nombre Comercial:* ${nombreComercial}\n`;
        mensaje += `*Nombres y Apellidos:* ${nombresApellidos}\n`;
        mensaje += `*Celular:* ${celular}\n`;
        mensaje += `*Tipo de Negocio:* ${tipoNegocioFinal}\n`;

        if (mostrarOpciones) {
            if (correo) mensaje += `*Correo:* ${correo}\n`;
            if (numeroLocales) mensaje += `*Número de Locales:* ${numeroLocales}\n`;
        }

        // Codificar mensaje para URL
        const mensajeCodificado = encodeURIComponent(mensaje);
        const numeroWhatsApp = '51955310060';
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        window.open(urlWhatsApp, '_blank');

        // Registrar envío para cooldown
        registrarEnvio();
        
        // Limpiar formulario después de enviar
        limpiarFormulario();
        setHoneypot('');
        toast.success('Mensaje enviado correctamente');
    };

    // Función para enviar por correo con EmailJS
    const enviarCorreo = async (e) => {
        e.preventDefault();

        if (!validarFormulario()) return;
        if (!validarAntiSpam()) return;

        setEnviandoCorreo(true);

        // Formatear fecha y hora actual
        const ahora = new Date();
        const fechaFormateada = ahora.toLocaleDateString('es-PE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Combinar tipo de negocio (si es "Otro", mostrar el valor especificado)
        const tipoNegocioCompleto = tipoNegocio === 'Otro' 
            ? `Otro (${tipoNegocioOtro})` 
            : tipoNegocio;

        // Parámetros para la plantilla de EmailJS (nombres exactos del template)
        const templateParams = {
            nombresApellidos: nombresApellidos,
            time: fechaFormateada,
            ruc: ruc,
            nombreComercial: nombreComercial,
            celular: celular,
            correo: correo || 'No proporcionado',
            tipoNegocioCompleto: tipoNegocioCompleto,
            numeroLocales: numeroLocales || 'No especificado',
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success('¡Correo enviado correctamente!');
            registrarEnvio();
            limpiarFormulario();
            setHoneypot('');
        } catch (error) {
            console.error('Error al enviar correo:', error);
            toast.error('Error al enviar el correo. Intente nuevamente.');
        } finally {
            setEnviandoCorreo(false);
        }
    };

    return (
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center py-10 md:py-16">
            {/* Fondo con imagen y overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className={`absolute inset-0 ${bgColor} opacity-85 transition-all duration-500`}></div>
            </div>

            {/* Contenido */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">

                    {/* Lado izquierdo - Texto */}
                    <div className="text-white lg:w-5/12">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-6 uppercase">
                            Gestiona tu negocio con confianza y alcanza nuevas metas
                        </h1>

                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="text-sm md:text-base">
                                    No solo verás el software, nuestros expertos te darán tips de optimización para tu botica.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="text-sm md:text-base">
                                    Veremos cuál de nuestros planes encaja mejor con tu volumen de ventas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Lado derecho - Formulario */}
                    <div className="w-full lg:w-6/12 max-w-lg">
                        <form className="bg-white rounded-xl shadow-xl p-5 md:p-6">

                            {/* Campo oculto con el producto seleccionado */}
                            <input type="hidden" name="producto" value={productoSeleccionado} />
                            
                            {/* Honeypot - Campo trampa invisible para bots */}
                            <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                                <label htmlFor="website">Website</label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            {/* Toggle SELECT FARMA / SELECT POS */}
                            <div className="flex mb-5 border border-primary rounded-full overflow-hidden">
                                <button
                                    type="button"
                                    onClick={() => setCategoriaActiva('farmacia')}
                                    className={`flex-1 py-2.5 px-3 font-bold text-xs md:text-sm transition-all duration-300 ${esFarmacia
                                            ? 'bg-secondary text-white'
                                            : 'bg-white text-primary hover:bg-gray-50'
                                        }`}
                                >
                                    SELECT FARMA
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCategoriaActiva('pos')}
                                    className={`flex-1 py-2.5 px-3 font-bold text-xs md:text-sm transition-all duration-300 ${!esFarmacia
                                            ? 'bg-primary text-white'
                                            : 'bg-white text-primary hover:bg-gray-50'
                                        }`}
                                >
                                    SELECT POS
                                </button>
                            </div>

                            {/* Campos del formulario */}
                            <div className="space-y-3">
                                {/* RUC y Nombre Comercial */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                                            RUC
                                        </label>
                                        <input
                                            type="number"
                                            value={ruc}
                                            onChange={(e) => setRuc(e.target.value.slice(0, 20))}
                                            maxLength={20}
                                            className="w-full border border-primary rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:border-secondary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                                            Nombre Comercial
                                        </label>
                                        <input
                                            type="text"
                                            value={nombreComercial}
                                            onChange={(e) => setNombreComercial(e.target.value.slice(0, 100))}
                                            maxLength={100}
                                            className="w-full border border-primary rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:border-secondary transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Nombres y Apellidos */}
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                                        Nombres y Apellidos
                                    </label>
                                    <input
                                        type="text"
                                        value={nombresApellidos}
                                        onChange={(e) => setNombresApellidos(e.target.value.slice(0, 100))}
                                        maxLength={100}
                                        className="w-full border border-primary rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:border-secondary transition-colors"
                                    />
                                </div>

                                {/* Celular y Tipo de Negocio */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                                            Celular
                                        </label>
                                        <div className="flex">
                                            <div className="flex items-center gap-1 bg-gray-50 border border-r-0 border-primary rounded-l-md px-1.5">
                                                <img src="https://flagcdn.com/w20/pe.png" alt="Perú" className="w-4 h-auto" />
                                                <span className="text-[10px] text-gray-500">+51</span>
                                            </div>
                                            <input
                                                type="tel"
                                                value={celular}
                                                onChange={(e) => setCelular(e.target.value)}
                                                className="flex-1 min-w-0 border border-primary rounded-r-md px-2.5 py-1.5 text-sm focus:outline-none focus:border-secondary transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                                            Tipo de Negocio
                                        </label>
                                        <select
                                            value={tipoNegocio}
                                            onChange={(e) => {
                                                setTipoNegocio(e.target.value);
                                                if (e.target.value !== 'Otro') {
                                                    setTipoNegocioOtro('');
                                                }
                                            }}
                                            className="w-full border border-primary rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:border-secondary transition-colors bg-white"
                                        >
                                            <option value="" disabled>Seleccionar</option>
                                            <option value="Farmacia">Farmacia - Botica</option>
                                            <option value="Minimarket">Minimarket</option>
                                            <option value="Bodega">Bodega</option>
                                            <option value="Punto de Venta">Punto de venta</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Campo para especificar "Otro" tipo de negocio */}
                                {tipoNegocio === 'Otro' && (
                                    <div className="animate-fadeIn">
                                        <label className="block text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                                            Especifique el tipo de negocio
                                        </label>
                                        <input
                                            type="text"
                                            value={tipoNegocioOtro}
                                            onChange={(e) => setTipoNegocioOtro(e.target.value.slice(0, 40))}
                                            maxLength={40}
                                            placeholder="Ingrese el tipo de negocio"
                                            className="w-full border border-primary rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:border-secondary transition-colors"
                                        />
                                        <span className="text-[10px] text-gray-400">{tipoNegocioOtro.length}/40</span>
                                    </div>
                                )}

                                {/* Agregar mayor información */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setMostrarOpciones(!mostrarOpciones)}
                                        className="text-xs text-secondary hover:text-primary font-medium flex items-center gap-1 transition-colors"
                                    >
                                        <span>{mostrarOpciones ? '-' : '+'}</span>
                                        <span>AGREGAR MAYOR INFORMACIÓN</span>
                                    </button>
                                </div>

                                {/* Opciones adicionales */}
                                {mostrarOpciones && (
                                    <div className="space-y-3 animate-fadeIn">
                                        {/* Correo */}
                                        <div>
                                            <label className="block text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                                                Correo
                                            </label>
                                            <input
                                                type="email"
                                                value={correo}
                                                onChange={(e) => setCorreo(e.target.value.slice(0, 70))}
                                                maxLength={70}
                                                className="w-full border border-primary rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:border-secondary transition-colors"
                                            />
                                        </div>

                                        {/* Número de Locales */}
                                        <div>
                                            <label className="block text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                                                Números de Locales
                                            </label>
                                            <div className="space-y-1">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="numeroLocales"
                                                        value="1-2"
                                                        checked={numeroLocales === '1-2'}
                                                        onChange={(e) => setNumeroLocales(e.target.value)}
                                                        className="w-3 h-3 text-secondary border-gray-300 focus:ring-secondary"
                                                    />
                                                    <span className="text-xs text-gray-600">1 - 2</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="numeroLocales"
                                                        value="3-4"
                                                        checked={numeroLocales === '3-4'}
                                                        onChange={(e) => setNumeroLocales(e.target.value)}
                                                        className="w-3 h-3 text-secondary border-gray-300 focus:ring-secondary"
                                                    />
                                                    <span className="text-xs text-gray-600">3 - 4</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="numeroLocales"
                                                        value="5+"
                                                        checked={numeroLocales === '5+'}
                                                        onChange={(e) => setNumeroLocales(e.target.value)}
                                                        className="w-3 h-3 text-secondary border-gray-300 focus:ring-secondary"
                                                    />
                                                    <span className="text-xs text-gray-600">5 - a más</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Botones de envío */}
                                <div className="flex flex-col sm:flex-row gap-2 pt-3">
                                    {/* Botón WhatsApp */}
                                    <button
                                        type="button"
                                        onClick={enviarWhatsApp}
                                        className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        <span className="text-xs">Enviar WhatsApp</span>
                                    </button>

                                    {/* Botón Correo */}
                                    <button
                                        type="button"
                                        onClick={enviarCorreo}
                                        disabled={enviandoCorreo}
                                        className={`flex-1 flex items-center justify-center gap-2 ${enviandoCorreo ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-800'} text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
                                    >
                                        {enviandoCorreo ? (
                                            <>
                                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                                </svg>
                                                <span className="text-xs">Enviando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-xs">Enviar Correo</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DemoForm