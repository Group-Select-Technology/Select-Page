import React from 'react'
import { CategoriaProvider } from '../context/CategoriaContext'

const Planes = () => {
    return (
        <CategoriaProvider>
            <div>Planes</div>
        </CategoriaProvider>
    )
}

export default Planes