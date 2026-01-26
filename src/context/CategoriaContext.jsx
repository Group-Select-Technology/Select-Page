import { createContext, useState } from 'react';

const CategoriaContext = createContext();

const CategoriaProvider = ({ children }) => {
    // Por defecto mostramos farmacia (SELECT FARMA)
    const [categoriaActiva, setCategoriaActiva] = useState('farmacia');

    return (
        <CategoriaContext.Provider
            value={{
                categoriaActiva,
                setCategoriaActiva
            }}
        >
            {children}
        </CategoriaContext.Provider>
    );
};

export { CategoriaProvider };
export default CategoriaContext;
