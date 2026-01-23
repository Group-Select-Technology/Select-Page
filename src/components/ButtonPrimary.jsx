import React from 'react'

/**
 * Botón primario con degradado personalizado.
 * @param {Object} props
 * @param {string} props.colorFrom - Color inicial del degradado (ej: '#2EC6DF' o 'from-cyan-400')
 * @param {string} props.colorTo - Color final del degradado (ej: '#1A2980' o 'to-blue-800')
 * @param {string} [props.children] - Texto del botón
 * @param {string} [props.className] - Clases adicionales
 * @param {function} [props.onClick] - Handler opcional
 */
const ButtonPrimary = ({
  colorFrom = '#2EC6DF',
  colorTo = '#1A2980',
  children = 'AGENDA UNA DEMO',
  className = '',
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`
        px-7 py-3
        rounded-3xl
        font-bold
        text-white
        text-sm
        tracking-wide
        shadow-md
        transition duration-200
        focus:outline-none
        border-none
        bg-gradient-to-r
        ${colorFrom.startsWith('from-') ? colorFrom : ''}
        ${colorTo.startsWith('to-') ? colorTo : ''}
        ${!colorFrom.startsWith('from-') || !colorTo.startsWith('to-') ? '' : ''}
        ${className}
      `}
      style={
        !colorFrom.startsWith('from-') && !colorTo.startsWith('to-')
          ? { backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo})` }
          : undefined
      }
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary