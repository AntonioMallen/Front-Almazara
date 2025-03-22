// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; 

function ProtectedRoute  ({ children, allowedRoles }) {
const { user } = useAuth();
if (!user) {
    return <Navigate to="/login" replace />; // No autenticado
  }
  console.log(user);
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />; // No tiene permiso
  }

   return children;
};

export default ProtectedRoute;