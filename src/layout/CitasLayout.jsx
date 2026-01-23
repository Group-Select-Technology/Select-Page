import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CitasLayout = () => {


    return (
        <>


            <Header />
            <main className="container mx-auto mt-14">
                <Outlet />
            </main>
            <Footer />


        </>
    );

}

export default CitasLayout