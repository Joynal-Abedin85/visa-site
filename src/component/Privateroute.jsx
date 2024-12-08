import { useContext } from "react";
import { Authcontext } from "../component/Provider";
import { Navigate, useLocation } from "react-router-dom";
import Load from "../component/Load";


const Privateroute = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    const location = useLocation()
    if(loading){
        return <Load></Load>
    }

    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privateroute;