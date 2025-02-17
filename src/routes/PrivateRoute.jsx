import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div>
        <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-20 w-48"></div>
            <div className="skeleton h-20 w-full"></div>
            <div className="skeleton h-20 w-full"></div>
        </div>
    </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;