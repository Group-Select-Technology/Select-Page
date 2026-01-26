
import { Link } from 'react-router-dom'

const ButtonSecondary = ({
    colorBack = '#fff',
    colorBorder = '#2EC6DF',
    children = 'AGENDA UNA DEMO',
    className = '',
    onClick,
    to,
    ...rest
}) => {
    const baseClasses = `
        px-7 py-3
        rounded-3xl
        font-bold
        text-sm
        tracking-wide
        shadow-md
        transition duration-200
        focus:outline-none
        border-2
        inline-block
        ${className}
    `;

    const style = {
        background: colorBack,
        color: colorBorder,
        borderColor: colorBorder
    };

    // Si tiene prop "to", renderizar como Link
    if (to) {
        return (
            <Link
                to={to}
                className={baseClasses}
                style={style}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    // Si no, renderizar como button normal
    return (
        <button
            className={baseClasses}
            style={style}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default ButtonSecondary

