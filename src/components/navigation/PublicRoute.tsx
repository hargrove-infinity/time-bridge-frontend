import { Navigate, Outlet } from "react-router-dom";
import { DASHBOARD } from "@/constants";
import { useStore } from "@/state";

export const PublicRoute = () => {
  const { isAuthenticated } = useStore();

  return isAuthenticated ? <Navigate to={DASHBOARD} replace /> : <Outlet />;
};
