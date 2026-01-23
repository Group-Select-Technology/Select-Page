import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        //* Fragment <> </> Lo usamos porque react solo retorna un elemento html, pero como vamos a retornar varios elementos usamos fragment
        //* Podemos no usar Fragment en caso retornemos solo un elemento html, ademas que usarlo evita el uso de divs innecesarios y que no tendran estilos
        <>
            <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-4 items-center">
                <Outlet />
            </main>
        </>
    )
}

export default AuthLayout