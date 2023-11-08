import { useContext } from "react";
import { AuthContext } from "../../../Authproviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Privateroute = ({children}) => {

    const location = useLocation();
    console.log(location)
    const {users,loader}=useContext(AuthContext);
    if(loader){
       return <Spinner animation="border" variant="secondary" />
    }
   
    if(users){
        return children
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default Privateroute;