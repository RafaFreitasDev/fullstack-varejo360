import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Register } from "../pages/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
};
