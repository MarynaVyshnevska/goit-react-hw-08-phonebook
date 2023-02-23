import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { selectAuthToken } from "../../redux/auth/auth.selector"

export const PrivateRoute = () => {
    const token = useSelector(selectAuthToken);
    console.log(token);
    return token ? <Outlet /> : <Navigate to='/login' replace />;
    
}