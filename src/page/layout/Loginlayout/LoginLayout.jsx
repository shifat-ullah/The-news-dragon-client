import { Outlet } from "react-router-dom";
import Navber from "../../shared/navber/Navber";


const LoginLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;