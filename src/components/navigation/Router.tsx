import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ANALYTICS, DASHBOARD, HOME, LOGIN, REGISTER } from "@/constants";
import { useStore } from "@/state";
import { Analytics, Dashboard, Login, Register } from "@/pages";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Router = () => {
  const { isAuthenticated } = useStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME}
          element={
            <Navigate to={isAuthenticated ? DASHBOARD : LOGIN} replace />
          }
        />
        <Route element={<PublicRoute />}>
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={ANALYTICS} element={<Analytics />} />
          <Route path={DASHBOARD} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
