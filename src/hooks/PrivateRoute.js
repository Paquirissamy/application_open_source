import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const isauthentificate = false;

  return isauthentificate;
};
