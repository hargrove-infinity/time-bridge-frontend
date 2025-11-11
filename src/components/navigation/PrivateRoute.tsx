import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "@/constants";
import { useStore } from "@/state";

export const PrivateRoute = () => {
  const { isAuthenticated } = useStore();

  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN} replace />;
};
