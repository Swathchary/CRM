import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  allowedRoles,
}) => {

  const token = localStorage.getItem("token");
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    }

    return <Navigate to="/agent" replace />;
  }

  return children;
};

export default ProtectedRoute;