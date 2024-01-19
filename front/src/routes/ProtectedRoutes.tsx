import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";
import { api } from "../service/api";


export const ProtectedRoutes = () => {

  const {userProfile} = useUser()

  useEffect(() => {
    const token = localStorage.getItem("Varejo360:TOKEN");

    if (!token) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    userProfile()
  }, []);
  const { user } = useUser();

  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
 
};
