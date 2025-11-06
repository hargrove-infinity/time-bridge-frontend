import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HOME, LOGIN, REGISTER } from "@/constants";
import { Login, Register } from "@/pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Navigate to={LOGIN} replace />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={REGISTER} element={<Register />} />
    </Routes>
  </BrowserRouter>
);
