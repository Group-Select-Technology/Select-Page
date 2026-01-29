import React from 'react'
import { CategoriaProvider } from '../context/CategoriaContext'
import DemoForm from '../components/demo/DemoForm'

const Demo = () => {
    return (
        <CategoriaProvider>
            <DemoForm />
        </CategoriaProvider>
    )
}

export default Demo