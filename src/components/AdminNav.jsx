import { Link } from "react-router-dom"

const AdminNav = () => {
    return (
        <nav className="flex gap-2">
            <Link
                to="/admin/perfil"
                className="text-xl text-gray-600 font-bold uppercase mb-8"
            >Perfil</Link>
            <p>&ndash;</p>
            <Link
                to="/admin/cambiar-password"
                className="text-xl text-gray-600 font-bold uppercase"
            >Cambiar Password</Link>
        </nav>
    )
}

export default AdminNav