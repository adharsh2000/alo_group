import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    const { token } = useSelector((state) => state.user);
    console.log(token,"tken");
    return token ? <Outlet /> : <Navigate to="/login" />
}