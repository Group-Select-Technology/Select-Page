import { useContext } from 'react';
import CategoriaContext from '../context/CategoriaContext';

const useCategoria = () => {
    return useContext(CategoriaContext);
};

export default useCategoria;
