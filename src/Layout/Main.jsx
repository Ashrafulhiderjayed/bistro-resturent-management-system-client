import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />            
            <Footer />
        </div>
    );
};

export default Main;