import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();

    const removeNavFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')
    console.log(removeNavFooter)
    return (
        <div>
            {removeNavFooter || <NavBar />}
            <Outlet />            
            {removeNavFooter || <Footer />}
        </div>
    );
};

export default Main;