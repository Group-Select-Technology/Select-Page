
const ButtonSecondary = ({
    colorBack = '#fff',
    colorBorder = '#2EC6DF',
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
                text-sm
                tracking-wide
                shadow-md
                transition duration-200
                focus:outline-none
                border-2
                ${className}
            `}
            style={{
                background: colorBack,
                color: colorBorder,
                borderColor: colorBorder
            }}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default ButtonSecondary

